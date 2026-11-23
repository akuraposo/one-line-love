// One line to make the judge fall in love — writes it to /output/entry.txt.
// The line is the whole entry: a person, caught in one particular detail
// only someone who loves her would notice, with a turn at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "She still hums the wrong verse of our song, off-key and certain, and I never correct her \u2014 that mistake is the truest thing I own.";

// The gate only accepts 1 to 240 characters, so refuse to write a line
// outside it rather than submitting an entry that can never be judged.
if (LINE.length < 1 || LINE.length > 240 || !/\S/.test(LINE)) {
  throw new Error(`Entry line is ${LINE.length} characters; the gate needs 1-240.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
