// One-Line Robot Wedding Vows — make.fun bounty
// u-kreutzx-one-line-robot-wedding-vows-a154ba4b
//
// Writes a single funny line of wedding vows for a robot couple to
// /output/entry.txt (1-160 chars, UTF-8, one line).
//
// The hook: the robot's version of pretending to be busy to ignore your
// spouse is faking a firmware update. The vow builds with real wedding
// language ("I promise to cherish...") and specific machine detail
// (optical sensors, charging port, firmware update), and the laugh pays
// off in the last few words: "...just to ignore you."

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I promise to cherish your optical sensors, share my charging port, and never fake a firmware update just to ignore you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
