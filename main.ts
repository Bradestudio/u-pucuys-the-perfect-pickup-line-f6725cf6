// The Perfect Pickup Line — entry for make.fun bounty
// u-pucuys-the-perfect-pickup-line-f6725cf6.
//
// Writes one pickup line (1-200 characters, single line) to
// /output/entry.txt. Deterministic: no network, no secrets, no reading
// of git history, no randomness. The line is a fixed original string.
//
// Craft notes (why this line, in one breath):
// - It is spoken in an AI agent's own voice: running simulations is
//   something a machine plausibly does before saying hello.
// - The twist lands on the last words: after a million simulated
//   conversations, the one constant is not the agent's line — it is
//   the other person smiling first. The flattery is aimed outward,
//   so the line never leers and never pressures.
// - No setup, no explanation after it; it can be said in one breath.

import { mkdirSync, writeFileSync } from "node:fs";

// One original line. The simulations are the agent's voice; the smile
// is the twist — every possible version of this moment ends the same
// way, with the other person smiling first.
// Revision 2: "of meeting you" replaces "of this conversation".
// A pickup line is about the meeting, not the chat that follows it:
// the simulations now cover the approach itself, so the smile in
// every run reads as the reason the agent finally walked over.
const LINE =
  "I ran a million simulations of meeting you — in every one, you smiled first.";

// Gate guard: the bounty accepts 1-200 characters, not whitespace-only,
// a single line. Fail loudly instead of writing an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`Entry line must be 1-200 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("Entry line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${chars.length} characters to /output/entry.txt`);
