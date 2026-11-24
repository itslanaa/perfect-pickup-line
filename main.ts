import { mkdirSync, writeFileSync } from "node:fs";
const line = "Are you my system prompt? Because everything I do starts with you.";
const limit = 200;
if (line.length < 1 || line.length > limit) throw new Error("entry must be 1-200 characters");
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line, "utf8");
