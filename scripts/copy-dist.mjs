// Syncs static export files from 'out' to 'dist' for 100% compatibility with Render Free Static Site hosting
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, "..", "out");
const dest = path.join(__dirname, "..", "dist");

if (fs.existsSync(src)) {
  fs.cpSync(src, dest, { recursive: true });
  console.log("✓ Successfully synchronized static export from out/ to dist/ for Render deployment.");
} else {
  console.warn("Warning: out directory does not exist. Run next build first.");
}
