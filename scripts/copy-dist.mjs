// Syncs static export files from 'out' to 'dist' for 100% compatibility with Render Free Static Site hosting
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, "..", "out");
const distDest = path.join(__dirname, "..", "dist");
const buildDest = path.join(__dirname, "..", "build");

if (fs.existsSync(src)) {
  fs.cpSync(src, distDest, { recursive: true });
  fs.cpSync(src, buildDest, { recursive: true });
  console.log("✓ Successfully synchronized static export from out/ to dist/ and build/ for Render deployment.");
} else {
  console.warn("Warning: out directory does not exist. Run next build first.");
}
