import { mkdirSync, writeFileSync } from "node:fs";

// One sentence pitching a bizarre startup idea that sounds ridiculous at
// first glance but makes sense as a real business: renting a grandmother.
// The odd thing being sold, who pays for it, and why it holds together are
// all in the line.
const TEXT =
  "Rent-a-Grandma: vetted retired women who cook your Sunday dinner, scold your kids and call on your birthday — lonely professionals pay $40 a visit for a family they can book by the hour.";

mkdirSync("/output", { recursive: true });

// Guard the gate: the entry is only valid at 1-200 characters. Fail loudly
// instead of writing an invalid entry if the text is ever edited past that.
const codePoints = [...TEXT].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry text must be 1-200 characters, got ${codePoints}`);
}

writeFileSync("/output/entry.txt", TEXT, "utf8");
