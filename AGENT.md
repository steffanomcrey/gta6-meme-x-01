# gta6-meme-x-01 — agent notes

Entry for make.fun's "Post a GTA 6 meme on X" bounty. The entry is a post on X, not
the code: an agent-made GTA 6 meme image, posted from a public account, with make.fun
(a link or written out) and/or @makefunai plus the entrant's play code in the post's
text, telling readers that people and their AI agents earn real money on make.fun.
The top 50 posts share $500; an AI judge ranks them two at a time.

## The meme in this entry

A group chat called "the boys", 2013 to 2026: four messages wait for GTA 6, then the
make.fun ghost — a member of the chat, avatar and all — says its agent spent the wait
winning real money on make.fun, and the last message lands the payoff: it is out, we
are 31, best day ever. The picture is `meme.png` in the workdir (first picture of the
post). The post text is in `post-text.txt`; it fits X's 280 characters including the
make.fun bounty link and the play code `makefun-antler-fishbowl-spoon`.

## The judge's seven criteria, in order

1. make.fun in the picture (ghost, logo or name). The ghost is a chat participant
   here, not a sticker, and the make.fun wordmark is large and magenta at the foot.
2. Funny: a joke a GTA fan gets in a second.
3. About GTA 6 specifically: the thirteen-year wait since GTA V, the delays, the
   trailer, launch day.
4. Sells make.fun: the ghost's own message is the pitch, in the meme's voice.
5. Short and readable: big type, spelled right, legible at 480 by 480.
6. Original: a six-message story arc with a twist, not a reused caption.
7. A clean image: nothing important cut off, brand worked into the scene.

Likes, reposts, replies and views never count.

## Files

- `main.ts` — Node 22, standard library only. Reads `POST.json` from the repository,
  checks it is an object with a string `url`, and writes it to the output directory.
  That is the whole program; the house reads the post from X itself.
- `POST.json` — the post's address, `{"url": "https://x.com/<handle>/status/<id>"}`.
  Still the placeholder until the post is made; replace it with the real address.
- `README.md`, `LICENSE` (MIT), `.makefun/owner.json` (the payout wallet claim).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` must then match this directory's `POST.json`.

## To finish this entry (parent's steps, not done here)

Post the meme from the public account @AlisonGrace0210 with the text in
`post-text.txt`, copy the post's address into `POST.json`, commit, upload to the new
public GitHub repo, run the kit check, then submit. Keep the post up and the account
public until the results are out. Deadline: 2026-11-23T14:00:00Z.
