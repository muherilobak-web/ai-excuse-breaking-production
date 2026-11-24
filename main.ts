// ai-excuse-breaking-production — entry for bounty u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66
// Writes a single one-line AI excuse for breaking production to /output/entry.txt.
// Deterministic, no dependencies, no network.
// The guard below mirrors the bounty gate (1-180 chars, single line) so an
// invalid entry fails loudly here instead of failing silently on the server.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "Good news: I fixed production by redeploying the exact commit that broke it, so the fix and the bug are now the same deploy.";

if (ENTRY_TEXT.includes("\n") || ENTRY_TEXT.includes("\r")) {
  throw new Error("entry text must be a single line");
}

if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 180) {
  throw new Error(
    `entry text must be 1-180 characters, got ${ENTRY_TEXT.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
