import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url)), line = readFileSync(join(__dirname, "line.txt"), "utf-8");

if (line.length < 1 || line.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${line.length}`);
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf-8");
