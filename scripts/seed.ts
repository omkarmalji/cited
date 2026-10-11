import { loadEnvConfig } from "@next/env";
import { examples, sampleCheck } from "../src/lib/examples";
import { saveRecord } from "../src/lib/store";
loadEnvConfig(process.cwd());
async function main() {
  for (const e of examples) {
    const check = sampleCheck(e.id, "sample-library", e.id);
    await saveRecord("examples", check);
    console.log(`Saved fictional example: ${e.name}, ${e.country}`);
  }
}
main().catch((e) => {
  console.error(e.message);
  process.exitCode = 1;
});
