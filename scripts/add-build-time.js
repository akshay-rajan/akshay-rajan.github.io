import fs from "fs";

const now = new Date();
const day = String(now.getDate()).padStart(2, '0');
const month = String(now.getMonth() + 1).padStart(2, '0');
const year = now.getFullYear();
const formattedDate = `${day}-${month}-${year}`;

const filePath = "src/config.json";

let existing = {};
if (fs.existsSync(filePath)) {
  const raw = fs.readFileSync(filePath, "utf-8");
  try {
    existing = JSON.parse(raw);
    existing.builtAt = formattedDate;
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));
    console.log("Added build time to config:", formattedDate);
  } catch {
    console.error("Invalid JSON in config file. Terminating Build Time addition.");
  }
}
