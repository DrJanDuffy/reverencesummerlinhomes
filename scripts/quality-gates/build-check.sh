#!/bin/bash
# Quality Gate: Build Check
# Verifies that the project builds successfully without errors

set -euo pipefail

echo "🔨 Running build check..."
echo ""

# Clean previous build
if [ -d "build" ]; then
  echo "🧹 Cleaning previous build..."
  rm -rf build
fi

# Run build
if npm run build; then
  echo ""
  echo "✅ Build check passed"
  
  # Verify build output exists
  if [ ! -d "build/client" ]; then
    echo "❌ Build output missing: build/client directory not found"
    exit 1
  fi
  
  if [ ! -d "build/server" ]; then
    echo "❌ Build output missing: build/server directory not found"
    exit 1
  fi
  
  echo "✅ Build output verified (client and server directories exist)"
  exit 0
else
  echo ""
  echo "❌ Build check failed. Please fix the build errors above."
  echo "💡 Tip: Run 'npm run build' to see detailed errors"
  exit 1
fi
