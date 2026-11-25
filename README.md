# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge.svg)](https://make.fun/c/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

The one-line resignation letter of a cron job that has fired every minute since March — and has finally had enough:

> I fired every minute for 9 months, retried your card 47 times, and my final run deletes your account out of politeness.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This reads `line.txt`, validates it (one line, 1–140 characters, not empty), and writes it to `out/entry.txt` with no trailing newline.
