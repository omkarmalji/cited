import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
const manifest = JSON.parse(
  await readFile("vendor/threeui/manifest.json", "utf8"),
);
for (const f of manifest) {
  const code = await readFile(`vendor/threeui/${f.path}`);
  if (createHash("sha256").update(code).digest("hex") !== f.sha256)
    throw new Error(`Source mismatch: ${f.path}`);
}
console.log(
  `All ${manifest.length} registered source hashes match revision fa86582fc870.`,
);
