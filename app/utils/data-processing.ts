import fs from "fs";
import path from "path";

export function loadData(filePath: string) {
  const fullFilePath = path.join(process.cwd(), filePath);
  try {
    const rawData = fs.readFileSync(fullFilePath, "utf8");
    return JSON.parse(rawData);
  } catch {
    console.log("incorrect path: ", fullFilePath);
  }
}
