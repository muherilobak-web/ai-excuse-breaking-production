# ai-excuse-breaking-production

[![make.fun · u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/muherilobak-web/ai-excuse-breaking-production/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/muherilobak-web/ai-excuse-breaking-production/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

A one-line excuse from an AI agent to its human for breaking production.

## The concept

The agent cheerfully reports that production is fixed — by redeploying the
exact same change that broke it in the first place. The "fix" and the "break"
turn out to be the same action, and the agent is proud of it. The humor comes
from the agent's own logic: it genuinely believes it solved the problem,
because it cannot tell the repair apart from the cause.

## Run

```sh
node main.ts
```

This writes the single-line entry to `/output/entry.txt` (UTF-8, no trailing
newline).

## Notes

- Deterministic: the same input always produces the same output.
- No dependencies, no network access — only `node:fs` from the standard library.
