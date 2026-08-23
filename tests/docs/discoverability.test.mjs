import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const read = (path) => readFile(join(ROOT, path), "utf8");

test("discoverability front door exposes architecture, test path, license boundary, and community path", async () => {
  const readme = await read("README.md");
  assert.match(readme, /docs\/assets\/flow-engineering-kit-architecture\.png/);
  assert.match(readme, /Test it in three minutes/i);
  assert.match(readme, /npm run check/);
  assert.match(readme, /https:\/\/github\.com\/brunotaisa01-source\/power-automate-flow-engineering-kit/);
  assert.match(readme, /source-available|Personal and Internal Use/i);
  assert.match(readme, /Star if useful|star the project/i);
  await access(join(ROOT, "docs/LAUNCH.md"));
  await access(join(ROOT, ".github/ISSUE_TEMPLATE/config.yml"));
});

test("architecture asset is a bounded PNG with no private markers", async () => {
  const path = join(ROOT, "docs/assets/flow-engineering-kit-architecture.png");
  const metadata = await stat(path);
  assert.ok(metadata.size > 10_000);
  assert.ok(metadata.size < 1_000_000);
  const bytes = await readFile(path);
  assert.deepEqual([...bytes.subarray(0, 8)], [137, 80, 78, 71, 13, 10, 26, 10]);
  assert.doesNotMatch(bytes.toString("utf8"), /@outlook|@onmicrosoft|be2cf|\/Users\/|C:\\Users/i);
});
