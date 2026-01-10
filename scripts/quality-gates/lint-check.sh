#!/bin/bash
# Quality Gate: Lint Check
# Runs ESLint on all TypeScript/TSX files and exits with error if issues found

set -euo pipefail

echo "🔍 Running ESLint checks..."
echo ""

# Run ESLint with auto-fix for some issues
if npm run lint; then
  echo ""
  echo "✅ Lint check passed"
  exit 0
else
  echo ""
  echo "❌ Lint check failed. Please fix the errors above."
  echo "💡 Tip: Run 'npm run lint' to see detailed errors"
  exit 1
fi
