# Quick Start - Review-Ready Setup

## 🚀 Get Started in 3 Steps

### 1. Setup Git Hooks

```bash
npm run prepare
```

This installs pre-commit hooks that automatically check code quality before each commit.

### 2. Test Quality Gates

```bash
npm run quality:pre-merge
```

This runs all quality checks (lint, typecheck, build, format).

### 3. Review Pre-Merge Checklist

Before merging any PR, review [PRE_MERGE_CHECKLIST.md](./PRE_MERGE_CHECKLIST.md).

---

## 📋 Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production

# Quality Checks
npm run lint             # Run ESLint
npm run typecheck        # Run TypeScript check
npm run format           # Format code with Prettier
npm run validate         # Run typecheck + lint

# Quality Gates
npm run quality:pre-commit   # Pre-commit checks
npm run quality:pre-merge    # Pre-merge checks (full suite)
```

---

## 🤖 For AI Agents

Run this sequence before merging:

```bash
# 1. Run automated quality gates
npm run quality:pre-merge

# 2. Verify contact information
grep -r "Janet" app/ --exclude-dir=node_modules || echo "✅ No 'Janet' found"
grep -r "tel:" app/components/ | grep -v "930-8222" || echo "✅ All tel links correct"

# 3. Check required files
test -f public/sitemap.xml && echo "✅ Sitemap exists" || echo "❌ Missing sitemap"

# 4. Review PRE_MERGE_CHECKLIST.md for manual checks
```

---

## 📚 Full Documentation

- **Setup Guide**: [REVIEW_READY_SETUP.md](./REVIEW_READY_SETUP.md)
- **Pre-Merge Checklist**: [PRE_MERGE_CHECKLIST.md](./PRE_MERGE_CHECKLIST.md)
- **Quality Gates**: [scripts/quality-gates/README.md](./scripts/quality-gates/README.md)
- **Graphite Setup**: [.graphite/README.md](./.graphite/README.md)

---

## ⚡ Troubleshooting

**Scripts not working on Windows?**

```powershell
# Use PowerShell version
powershell -ExecutionPolicy Bypass -File scripts/quality-gates/pre-merge.ps1

# Or install Git Bash (comes with Git for Windows)
```

**Want to bypass hooks temporarily?**

```bash
git commit --no-verify  # Not recommended!
```

---

**Questions?** Check the full documentation or review the scripts in `scripts/quality-gates/`.
