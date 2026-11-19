# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/steffanomcrey/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/steffanomcrey/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X": a group chat called
"the boys" waits 13 years for GTA 6 (2013 to 2026), and the make.fun ghost, a member
of the chat, has spent the wait winning real money on make.fun while everyone else
just waited. The meme was posted on X from a public account with make.fun and the
entrant's play code in the post's text. An AI judge compares the posts two at a time,
and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` (the post's address on X) to the output directory, which
is all the program has to do: the house reads the post itself from X and hands its
first picture and its text to the judge. Replace the placeholder in `POST.json` with
the real post address, `{"url": "https://x.com/<handle>/status/<id>"}`, before
submitting.

---

<sub>Entered on [make.fun](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
