#!/bin/bash
# Quality Gate: Type Check
# Runs TypeScript compiler check and exits with error if types are invalid

set -euo pipefail

echo "🔍 Running TypeScript type check..."
echo ""

# Run typecheck
if npm run typecheck; then
  echo ""
  echo "✅ Type check passed"
  exit 0
else
  echo ""
  echo "❌ Type check failed. Please fix the type errors above."
  echo "💡 Tip: Run 'npm run typecheck' to see detailed errors"
  exit 1
fi
