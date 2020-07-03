const fs = require('fs');

const functionExports = fs
  .readdirSync('./src/functions')
  .filter((filename) => !filename.endsWith('.spec.ts'))
  .filter((filename) => filename.endsWith('.ts'))
  .map((filename) => filename.slice(0, -3))
  .map((filename) => `export * from './functions/${filename}';`);

const typeExports = fs
  .readdirSync('./src/types')
  .filter((filename) => !filename.endsWith('.spec.ts'))
  .filter((filename) => filename.endsWith('.ts'))
  .map((filename) => filename.slice(0, -3))
  .map((filename) => `export * from './types/${filename}';`);

const lines = [
  '// AUTOMATICALLY GENERATED. DO NOT EDIT BY HAND.',
  '',
  ...functionExports,
  '',
  ...typeExports,
  '',
];

fs.writeFileSync(
  './src/index.ts',
  lines.join('\n'),
  { encoding: 'utf-8' },
);
