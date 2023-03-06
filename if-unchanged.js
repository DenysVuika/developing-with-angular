#!/usr/bin/env node

const child_process = require('child_process');
const path = require('path');

const currentPath = path.join(
  __dirname,
  path.relative(__dirname, process.cwd())
);
console.log('path: ', currentPath);

let result;

try {
  result = child_process
    .execSync('git diff --name-only origin/master... | cat')
    .toString();
} catch (err) {
  console.error(err);
  process.exit(1);
}

if (result) {
  console.log(result);

  const dirs = result
    .split('\n')
    .filter((file) => file)
    .map((file) => path.join(__dirname, file));

  for (const dir of dirs) {
    if (dir.startsWith(currentPath)) {
      process.exit(1);
    }
  }
}

process.exit(0);
