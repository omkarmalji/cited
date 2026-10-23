import { build } from "esbuild";
import { readFile, access, mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
const root = path.resolve("vendor/threeui");
// The registry references additional, unused variants. Their raw dependencies
// come from the pinned official package. Registered source is never rewritten.
await mkdir("src/generated", { recursive: true });
await build({
  // Exact registered sources only: the arc canvas plus the Halftone Flow and
  // Flow Field effects from the same registry, exported together.
  stdin: {
    contents: [
      'export { PredictiveArcCanvas } from "./src/shaders/predictive-arc/PredictiveArcCanvas.tsx";',
      'export { HalftoneFlow } from "./src/shaders/neuform-isolated/NeuformCraftEffects.tsx";',
      'export { FlowField } from "./src/shaders/neuform-isolated/NeuformBatchEffects.tsx";',
    ].join(String.fromCharCode(10)),
    resolveDir: root,
    loader: "tsx",
  },
  outfile: "src/generated/threeui.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  jsx: "automatic",
  external: ["react", "react/jsx-runtime"],
  plugins: [
    {
      name: "registered-raw",
      setup(b) {
        b.onResolve({ filter: /\.html\?raw$/ }, async (args) => {
          const file = path.resolve(
            args.resolveDir,
            args.path.replace(/\?raw$/, ""),
          );
          try {
            await access(file);
            return { path: file, namespace: "raw" };
          } catch {
            const rel = path.relative(path.join(root, "src"), file);
            return {
              path: path.resolve(
                "node_modules/@designcodeio/threeui/lib-dist",
                rel + ".js",
              ),
              namespace: "official-js",
            };
          }
        });
        b.onLoad({ filter: /.*/, namespace: "raw" }, async (args) => ({
          contents: `export default ${JSON.stringify(await readFile(args.path, "utf8"))}`,
          loader: "js",
        }));
        b.onLoad({ filter: /.*/, namespace: "official-js" }, async (args) => ({
          contents: await readFile(args.path, "utf8"),
          loader: "js",
        }));
      },
    },
  ],
});
await copyFile(
  path.join(root, "src/shaders/threeui.css"),
  "src/generated/threeui.css",
);
console.log(
  "Built exact registered ThreeUI sources; supplemental assets from official 1.2.0 package.",
);
