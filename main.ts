import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of error copy: a double charge with no order at all.
// Brutal truth first (charged twice, ordered zero times), then the
// concrete next step (check the bank, order again), then the twist.
// Second pass: cut the repeated "twice" from the middle clause and
// sharpen "never did" into "never existed" — the order is not late,
// it was never created at all.
const line =
  "Charged twice, ordered zero times: the payment cleared twice and the order never existed. Check your bank, then order again — dinner is still theoretical.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
