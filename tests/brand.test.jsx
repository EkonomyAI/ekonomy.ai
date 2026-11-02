import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const expected = {
  "ekonomyai-reverse.svg": "0353e8b4aa1f62835cb515f7448045955905d1d88afd27bbe90e373240b1f6e8",
  "ekonomyai-mono.svg": "2a8e9de1270cf8172f178dc858d812f121c902e823693db52b3508325ec1e0a7",
  "ekonomyai-avatar-600.png": "d5b5283c49ac3ddf790f8f000ead4d91ad55bd6ffd62e6d74c9aa6ead0877d86",
  "ekonomyai-navy.svg": "ee95ab216534659412ecc3b0c553771ccf6cc2b3689ebac9092b235769915271"
};
test('approved identity assets remain unchanged and all website placements use company brand', () => {
  for (const [file, hash] of Object.entries(expected)) {
    assert.equal(createHash('sha256').update(readFileSync(`public/brand/${file}`)).digest('hex'), hash);
  }
  const source = readFileSync('src/pages/index.tsx', 'utf8');
  for (const file of ['ekonomyai-reverse.svg', 'ekonomyai-mono.svg', 'ekonomyai-navy.svg', 'ekonomyai-avatar-600.png']) assert.ok(source.includes(`/brand/${file}`));
  for (const meta of ['og:image', 'twitter:image', 'apple-touch-icon']) assert.ok(source.includes(meta));
  assert.ok(!source.includes('>e.</span>'));
  assert.ok(!source.includes('/oiko'));
});
