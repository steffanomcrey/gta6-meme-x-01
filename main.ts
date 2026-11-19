// SPDX-License-Identifier: MIT
// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: an agent-made GTA 6 meme, posted from a public
// account with make.fun and the entrant's play code in its text. This program does
// one job: it moves the post's address, recorded in POST.json at the repository
// root, into the grader's output directory, where the gate reads it. The house
// then reads the post from X, builds the dossier the judge sees, and grades it.
// Nothing written here is judged.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

let address;
try {
  address = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`POST.json could not be read from ${source}: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof address !== 'object' || address === null || typeof address.url !== 'string') {
  console.error('POST.json must be a JSON object with a string "url" field.');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, JSON.stringify(address), 'utf8');
