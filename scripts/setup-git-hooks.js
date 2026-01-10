#!/usr/bin/env node
/**
 * Setup Git Hooks
 * Installs quality gate scripts as git hooks for automated checks
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, '..');
const GIT_HOOKS_DIR = path.join(PROJECT_ROOT, '.git', 'hooks');
const QUALITY_GATES_DIR = path.join(PROJECT_ROOT, 'scripts', 'quality-gates');

// Check if we're in a git repository
if (!fs.existsSync(path.join(PROJECT_ROOT, '.git'))) {
  console.log('⚠️  Not a git repository. Skipping git hooks setup.');
  process.exit(0);
}

// Ensure .git/hooks directory exists
if (!fs.existsSync(GIT_HOOKS_DIR)) {
  fs.mkdirSync(GIT_HOOKS_DIR, { recursive: true });
}

// Determine shell script extension based on OS
const isWindows = process.platform === 'win32';
const preCommitScript = isWindows
  ? path.join(QUALITY_GATES_DIR, 'pre-commit.sh')
  : path.join(QUALITY_GATES_DIR, 'pre-commit.sh');

// Create pre-commit hook
const preCommitHook = path.join(GIT_HOOKS_DIR, 'pre-commit');

try {
  let hookContent;
  
  if (isWindows) {
    // Windows: Use PowerShell wrapper
    hookContent = `#!/bin/sh
# Pre-commit hook (Windows-compatible)
# Runs quality gates before allowing commits

if command -v bash >/dev/null 2>&1; then
  bash "${preCommitScript.replace(/\\/g, '/')}"
else
  # Fallback to npm commands if bash not available
  npm run quality:lint || exit 1
  npm run quality:typecheck || exit 1
fi
`;
  } else {
    // Unix-like: Direct bash execution
    hookContent = `#!/bin/sh
# Pre-commit hook
# Runs quality gates before allowing commits

bash "${preCommitScript}"
`;
  }

  fs.writeFileSync(preCommitHook, hookContent);
  
  // Make executable (Unix-like systems)
  if (!isWindows) {
    try {
      execSync(`chmod +x "${preCommitHook}"`, { stdio: 'inherit' });
    } catch (e) {
      console.log('⚠️  Could not make hook executable. Please run: chmod +x .git/hooks/pre-commit');
    }
  }
  
  console.log('✅ Pre-commit hook installed successfully!');
  console.log(`   Location: ${preCommitHook}`);
  console.log('');
  console.log('💡 The hook will run quality gates before each commit.');
  console.log('   To bypass (not recommended): git commit --no-verify');
  
} catch (error) {
  console.error('❌ Error setting up git hooks:', error.message);
  console.log('');
  console.log('Manual setup:');
  console.log(`  1. Copy ${preCommitScript} to .git/hooks/pre-commit`);
  console.log('  2. Make it executable: chmod +x .git/hooks/pre-commit');
  process.exit(1);
}
