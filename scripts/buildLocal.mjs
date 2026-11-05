import { spawnSync } from 'node:child_process';

const result = spawnSync(
  process.execPath,
  ['node_modules/@react-router/dev/bin.js', 'build'],
  { stdio: 'inherit', env: { ...process.env, VITE_LOCAL_PROTOTYPE: 'true' } },
);
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
const { finalizeBuild } = await import('./finalizeBuild.mjs');
await finalizeBuild();
