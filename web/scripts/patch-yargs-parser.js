import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const vendorDir = path.join(__dirname, 'vendor', 'yargs-parser', 'build', 'lib');
const nodeModulesDir = path.join(process.cwd(), 'node_modules');
const files = ['string-utils.js', 'yargs-parser-types.js', 'yargs-parser.js'];
const logInfo = (message) => console.info(`[yargs patch] ${message}`);

logInfo(`Starting yargs-parser patch (vendorDir=${vendorDir}).`);

if (!fs.existsSync(vendorDir)) {
  console.error('Missing vendor files; cannot patch yargs-parser.');
  process.exit(1);
}

if (!fs.existsSync(nodeModulesDir)) {
  console.warn('Skipping yargs-parser patch: project node_modules directory not found.');
  process.exit(0);
}

const targetDirs = findYargsParserLibDirs(nodeModulesDir);
if (!targetDirs.length) {
  console.warn('Skipping yargs-parser patch: no yargs-parser directories detected in node_modules.');
  process.exit(0);
}

logInfo(`Found ${targetDirs.length} target location(s) to patch.`);

for (const targetDir of targetDirs) {
  for (const file of files) {
    const src = path.join(vendorDir, file);
    const dest = path.join(targetDir, file);
    try {
      fs.unlinkSync(dest);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    fs.copyFileSync(src, dest);
  }
}

console.info(`Applied yargs-parser vendor patch to ${targetDirs.length} location(s).`);

function findYargsParserLibDirs(startDir) {
  const lockPath = path.join(process.cwd(), 'package-lock.json');
  if (fs.existsSync(lockPath)) {
    const lockDirs = findYargsParserLibDirsFromLock(lockPath);
    if (lockDirs.length) {
      logInfo(`Found ${lockDirs.length} yargs-parser/lib directories via package-lock.json.`);
      return lockDirs;
    }
    logInfo('package-lock.json scan found no yargs-parser entries; falling back to filesystem traversal.');
  } else {
    logInfo('package-lock.json not found; falling back to filesystem traversal.');
  }

  return scanNodeModulesForYargs(startDir);
}

function scanNodeModulesForYargs(startDir) {
  logInfo(`Scanning ${startDir} for yargs-parser/lib directories.`);
  const scanStart = Date.now();
  const targets = new Set();
  const queue = [startDir];
  const visited = new Set();
  const stats = { directoriesVisited: 0, nestedDirsEnqueued: 0 };

  while (queue.length) {
    const currentDir = queue.shift();
    let resolved;
    try {
      resolved = fs.realpathSync(currentDir);
    } catch {
      continue;
    }
    if (visited.has(resolved)) {
      continue;
    }
    visited.add(resolved);

    stats.directoriesVisited += 1;

    let entries;
    try {
      entries = fs.readdirSync(currentDir, { withFileTypes: true });
    } catch {
      continue;
    }

    for (const entry of entries) {
      if (!entry.isDirectory()) {
        continue;
      }

      const entryPath = path.join(currentDir, entry.name);

      if (entry.name === 'yargs-parser') {
        const libDir = path.join(entryPath, 'build', 'lib');
        if (fs.existsSync(libDir)) {
          targets.add(path.resolve(libDir));
        }
        continue;
      }

      if (entry.name.startsWith('@')) {
        queue.push(entryPath);
        stats.nestedDirsEnqueued += 1;
        continue;
      }

      if (entry.name.startsWith('node_modules')) {
        queue.push(entryPath);
        stats.nestedDirsEnqueued += 1;
        continue;
      }

      const nestedNodeModules = findNestedNodeModules(entryPath);
      stats.nestedDirsEnqueued += nestedNodeModules.length;
      for (const nestedDir of nestedNodeModules) {
        queue.push(nestedDir);
      }
    }
  }

  const durationMs = Date.now() - scanStart;
  logInfo(
    `Scan finished in ${durationMs}ms; visited ${stats.directoriesVisited} directories and enqueued ${stats.nestedDirsEnqueued} nested node_modules variants.`
  );

  return Array.from(targets);
}

function findYargsParserLibDirsFromLock(lockPath) {
  let lockJson;
  try {
    lockJson = JSON.parse(fs.readFileSync(lockPath, 'utf8'));
  } catch (error) {
    logInfo(`Could not read package-lock.json (${error.message}); falling back to traversal.`);
    return [];
  }

  const packages = lockJson.packages;
  if (!packages || typeof packages !== 'object') {
    logInfo('package-lock.json missing packages map; falling back to traversal.');
    return [];
  }

  const matches = [];
  for (const pkgPath of Object.keys(packages)) {
    const segments = pkgPath.split(/[\\/]+/).filter(Boolean);
    if (!segments.length || segments[segments.length - 1] !== 'yargs-parser') {
      continue;
    }
    const libDir = path.join(process.cwd(), ...segments, 'build', 'lib');
    if (fs.existsSync(libDir)) {
      matches.push(path.resolve(libDir));
    }
  }

  return Array.from(new Set(matches));
}

function findNestedNodeModules(dir) {
  const variants = [
    'node_modules',
    'node_modules2',
    'node_modules3',
    'node_modules4',
    'node_modules5',
    'node_modules 2',
    'node_modules 3',
    'node_modules 4',
    'node_modules 5',
    'node_modules-2',
    'node_modules-3',
    'node_modules-4',
    'node_modules-5',
  ];

  const nested = [];
  for (const variant of variants) {
    const candidate = path.join(dir, variant);
    try {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()) {
        nested.push(candidate);
      }
    } catch {
      // ignore permissions or race conditions
    }
  }
  return nested;
}
