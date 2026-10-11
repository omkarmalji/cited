import { readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";

const directory = "artifacts/demo";
const timeline = JSON.parse(
  await readFile(`${directory}/timeline.json`, "utf8"),
);
const duration = timeline.scenes.reduce(
  (total, scene) => total + scene.duration,
  0,
);
if (duration >= 180) throw new Error("Demo must stay under three minutes.");
const inputs = timeline.scenes.flatMap((scene) => [
  "-i",
  `${directory}/${scene.id}.wav`,
]);
const filters = timeline.scenes.map(
  (_, index) => `[${index + 1}:a]apad=pad_dur=2,aresample=48000[a${index}]`,
);
filters.push(
  `${timeline.scenes.map((_, index) => `[a${index}]`).join("")}concat=n=${timeline.scenes.length}:v=0:a=1[narration]`,
);
const output = `${directory}/cited-demo.mp4`;
execFileSync(
  "ffmpeg",
  [
    "-y",
    "-i",
    timeline.video,
    ...inputs,
    "-filter_complex",
    filters.join(";"),
    "-map",
    "0:v:0",
    "-map",
    "[narration]",
    "-t",
    String(duration),
    "-c:v",
    "libx264",
    "-preset",
    "medium",
    "-crf",
    "20",
    "-pix_fmt",
    "yuv420p",
    "-c:a",
    "aac",
    "-b:a",
    "96k",
    "-movflags",
    "+faststart",
    output,
  ],
  { stdio: ["ignore", "ignore", "pipe"] },
);
const metadata = JSON.parse(
  execFileSync(
    "ffprobe",
    ["-v", "error", "-show_format", "-show_streams", "-of", "json", output],
    { encoding: "utf8" },
  ),
);
if (
  Number(metadata.format.duration) >= 180 ||
  !metadata.streams.some((stream) => stream.codec_type === "audio")
)
  throw new Error("Invalid demo export.");
await writeFile(
  `${directory}/metadata.json`,
  JSON.stringify(metadata, null, 2),
);
execFileSync(
  "ffmpeg",
  [
    "-y",
    "-ss",
    "8",
    "-i",
    output,
    "-frames:v",
    "1",
    `${directory}/preview.png`,
  ],
  { stdio: ["ignore", "ignore", "pipe"] },
);
console.log(
  `Demo exported: ${output}, ${metadata.format.duration}s, ${metadata.streams.find((stream) => stream.codec_type === "video").width}×${metadata.streams.find((stream) => stream.codec_type === "video").height}`,
);
