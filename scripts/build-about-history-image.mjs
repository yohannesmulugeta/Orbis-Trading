import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptsDir, "..");
const partsDir = resolve(scriptsDir, "about-history-image");
const outputPath = resolve(root, "public/assets/orbis-history-restored.webp");

const parts = await Promise.all(
  Array.from({ length: 7 }, (_, index) =>
    readFile(resolve(partsDir, `orbis-history.part${index + 1}`), "utf8"),
  ),
);

const base64 = parts.join("").replace(/\s+/g, "");
const image = Buffer.from(base64, "base64");

if (image.length < 10000 || image.subarray(0, 4).toString("ascii") !== "RIFF") {
  throw new Error("About archival image data is invalid.");
}

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, image);
console.log(`Built About archival image (${image.length} bytes).`);
