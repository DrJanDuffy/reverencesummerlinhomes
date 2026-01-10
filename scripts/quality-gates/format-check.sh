#!/bin/bash
# Quality Gate: Format Check
# Verifies that all code is properly formatted using Prettier

set -euo pipefail

echo "🎨 Checking code formatting..."
echo ""

# Check if files need formatting
if npm run format -- --check > /dev/null 2>&1; then
  echo "✅ All files are properly formatted"
  exit 0
else
  echo "❌ Some files need formatting"
  echo "💡 Tip: Run 'npm run format' to auto-format files"
  exit 1
fi
