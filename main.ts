// Two Days of Quiet Dread — a one-line code review comment that approves
// a pull request while carrying quiet existential dread. The line is held as
// a single constant string and written out unchanged on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: a flat approval, with the dread coming from the codebase
// quietly outliving everyone who touches it. No exclamation, no melodrama —
// just the tests passing while everything, including the reviewer, gets older.
const ENTRY =
  "LGTM. The tests are green, the codebase is older than it was yesterday, and so am I.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(ENTRY);
console.log(`Characters: ${ENTRY.length}`);
