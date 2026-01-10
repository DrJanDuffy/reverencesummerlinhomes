#!/bin/bash
# Pre-merge Quality Gate
# Runs comprehensive quality checks before merging a branch
# This is the main script run before creating a PR or merging

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

cd "$PROJECT_ROOT"

echo "🚀 Running pre-merge quality gates..."
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

PASSED=0
FAILED=0
WARNINGS=0

# Function to run a check and track results
run_check() {
  local name=$1
  local script=$2
  local blocking=${3:-true}
  
  echo -e "${BLUE}Running: ${name}...${NC}"
  if bash "$script" > /tmp/quality-check-$$.log 2>&1; then
    echo -e "${GREEN}✅ ${name} passed${NC}"
    ((PASSED++))
    echo ""
    return 0
  else
    if [ "$blocking" = "true" ]; then
      echo -e "${RED}❌ ${name} failed (BLOCKING)${NC}"
      cat /tmp/quality-check-$$.log
      ((FAILED++))
      echo ""
      return 1
    else
      echo -e "${YELLOW}⚠️  ${name} failed (NON-BLOCKING)${NC}"
      cat /tmp/quality-check-$$.log
      ((WARNINGS++))
      echo ""
      return 0
    fi
  fi
}

# Check 1: Format (non-blocking)
run_check "Format Check" "$SCRIPT_DIR/format-check.sh" false

# Check 2: Lint (blocking)
if ! run_check "Lint Check" "$SCRIPT_DIR/lint-check.sh" true; then
  echo -e "${RED}❌ Pre-merge failed: Lint check is required${NC}"
  rm -f /tmp/quality-check-$$.log
  exit 1
fi

# Check 3: Type Check (blocking)
if ! run_check "Type Check" "$SCRIPT_DIR/typecheck.sh" true; then
  echo -e "${RED}❌ Pre-merge failed: Type check is required${NC}"
  rm -f /tmp/quality-check-$$.log
  exit 1
fi

# Check 4: Build (blocking)
if ! run_check "Build Check" "$SCRIPT_DIR/build-check.sh" true; then
  echo -e "${RED}❌ Pre-merge failed: Build check is required${NC}"
  rm -f /tmp/quality-check-$$.log
  exit 1
fi

# Cleanup
rm -f /tmp/quality-check-$$.log

# Summary
echo "=========================================="
echo -e "${GREEN}✅ All blocking quality gates passed!${NC}"
echo ""
echo "Summary:"
echo -e "  ${GREEN}Passed: ${PASSED}${NC}"
if [ $WARNINGS -gt 0 ]; then
  echo -e "  ${YELLOW}Warnings: ${WARNINGS}${NC}"
fi
if [ $FAILED -gt 0 ]; then
  echo -e "  ${RED}Failed: ${FAILED}${NC}"
  exit 1
fi
echo ""
echo "✅ Ready to merge!"
exit 0
