// scripts/fetch-meta.js
import fs from "fs";

const now = new Date().toISOString();
const filePath = "src/config.json";

let existing = {};
if (fs.existsSync(filePath)) {
  const raw = fs.readFileSync(filePath, "utf-8");
  try {
    existing = JSON.parse(raw);
  } catch {
    console.error("Invalid JSON in config file. Overwriting.");
  }
}

existing.builtAt = now;

fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
console.log("Added build time to config:", now);
