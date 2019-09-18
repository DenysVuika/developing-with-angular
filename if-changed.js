#!/usr/bin/env node

const child_process = require('child_process');
const path = require('path');

const currentPath = path.relative(__dirname, process.cwd());

const result = child_process
  .execSync('git diff --name-only origin/master... | cat')
  .toString();

if (result) {
  console.log(result);

  const dirs = result
    .split('\n')
    .filter(file => file)
    .map(file => path.dirname(file));

  for (const dir of dirs) {
    if (dir.startsWith(currentPath)) {
      process.exit(0);
    }
  }
}

process.exit(1);
