# Pre-Merge Checklist for AI Agents

This checklist is designed to be followed by AI agents and developers before merging code. Each item should be verified before proceeding with a merge.

## 🤖 AI Agent Instructions

When processing a merge request, systematically verify each section below. Use the provided commands and checks to automate verification where possible.

---

## 1. Code Quality Checks

### ✅ TypeScript Type Safety

- [ ] Run type check: `npm run typecheck`
- [ ] No type errors or warnings
- [ ] All new files have proper TypeScript types
- [ ] No use of `any` type (except where explicitly necessary)

**Command:**

```bash
npm run typecheck
```

**Expected Output:** Exit code 0, no errors

---

### ✅ Linting Standards

- [ ] Run lint check: `npm run lint`
- [ ] No linting errors
- [ ] ESLint warnings addressed (max-warnings: 0)
- [ ] All React hooks follow rules of hooks
- [ ] No unused variables or imports

**Command:**

```bash
npm run lint
```

**Expected Output:** Exit code 0, "✓ Lint check passed"

---

### ✅ Code Formatting

- [ ] Code follows Prettier formatting: `npm run format`
- [ ] All files are formatted consistently
- [ ] No formatting conflicts in diffs

**Command:**

```bash
npm run format -- --check
```

**Expected Output:** "All matched files use Prettier code style!"

---

### ✅ Build Verification

- [ ] Project builds successfully: `npm run build`
- [ ] Build output directories exist (`build/client`, `build/server`)
- [ ] No build warnings or errors
- [ ] Bundle size is reasonable (check chunk size warnings)

**Command:**

```bash
npm run build
ls -la build/client build/server
```

**Expected Output:** Exit code 0, directories exist

---

## 2. Contact Information & Branding

### ✅ Agent Information Accuracy

- [ ] Agent name is "Dr. Jan Duffy" (NOT "Janet" or "Dr. Janet Duffy")
- [ ] Phone number is "(702) 930-8222" for this site
- [ ] License number is "S.0197614.LLC"
- [ ] Email is "DrJanSells@ReverenceSummerlinHomes.com"
- [ ] Address is "10800 Reverence Pkwy, Las Vegas, NV 89134"

**Check Commands:**

```bash
# Verify no incorrect variations
grep -r "Janet" app/ --exclude-dir=node_modules || echo "✅ No 'Janet' found"
grep -r "555-0100\|555-0000" app/ || echo "✅ No placeholder phone numbers"
grep -r "Reference Summerlin" app/ --exclude-dir=node_modules || echo "✅ No 'Reference' found"
```

**Expected Output:** Only "✅" confirmation messages

---

### ✅ Contact Info in Required Locations

- [ ] Footer contains correct NAP (Name, Address, Phone)
- [ ] Header/navigation has phone number visible
- [ ] Contact page has all correct information
- [ ] Mobile sticky phone bar shows correct number (if applicable)
- [ ] All `tel:` links use format `tel:+17029308222`

**Check:**

```bash
grep -r "tel:" app/components/ | grep -v "930-8222\|7029308222" || echo "✅ All tel links correct"
```

---

## 3. SEO & Metadata

### ✅ Page Metadata

- [ ] Each page has unique `<title>` tag
- [ ] Each page has unique `<meta name="description">`
- [ ] H1 tags are unique and descriptive per page
- [ ] Images have descriptive `alt` attributes
- [ ] No duplicate content issues

**Check:**

```bash
# Verify unique titles (should not have duplicates)
grep -r "export.*metadata\|title:" app/routes/ | head -20
```

---

### ✅ Schema Markup

- [ ] LocalBusiness schema present on relevant pages
- [ ] Schema matches Google Business Profile data
- [ ] Structured data validates (use Google's Rich Results Test)
- [ ] No schema errors or warnings

**Manual Check Required:** Use [Google Rich Results Test](https://search.google.com/test/rich-results)

---

### ✅ Sitemap & Robots

- [ ] `sitemap.xml` exists and is accessible
- [ ] `robots.txt` exists and is correctly configured
- [ ] No broken internal links
- [ ] All routes are included in sitemap

**Check:**

```bash
test -f public/sitemap.xml && echo "✅ Sitemap exists" || echo "❌ Sitemap missing"
test -f public/robots.txt && echo "✅ Robots.txt exists" || echo "❌ Robots.txt missing"
```

---

## 4. Functionality & User Experience

### ✅ Form Functionality

- [ ] All forms submit correctly
- [ ] Form validation works as expected
- [ ] Error messages are user-friendly
- [ ] Success states are handled appropriately
- [ ] Loading states are implemented

**Manual Test Required:** Submit test forms on affected pages

---

### ✅ Navigation & Links

- [ ] All internal links work (no 404s)
- [ ] Navigation menus function correctly
- [ ] Mobile menu works (if applicable)
- [ ] External links open in new tabs (if required)
- [ ] No broken images

**Command (check for obvious issues):**

```bash
grep -r "href=" app/components/ | grep -E "href=\"(?!http|mailto|tel|#)" | head -10
```

---

### ✅ Mobile Responsiveness

- [ ] Pages render correctly on mobile (< 768px)
- [ ] Mobile sticky phone bar works (if applicable)
- [ ] Touch targets are appropriately sized
- [ ] No horizontal scrolling
- [ ] Images scale correctly

**Manual Test Required:** Test on actual mobile device or browser dev tools

---

### ✅ Performance

- [ ] Page load time < 3s on mobile (Core Web Vitals)
- [ ] Images are optimized (WebP format preferred)
- [ ] No console errors in browser
- [ ] Lazy loading implemented for below-fold images
- [ ] JavaScript bundles are reasonably sized

**Check:**

```bash
npm run build 2>&1 | grep -i "chunk size\|bundle" || echo "✅ No bundle size warnings"
```

---

## 5. Security & Best Practices

### ✅ Security Checks

- [ ] No API keys or secrets in code (check `.env` usage)
- [ ] No hardcoded passwords or tokens
- [ ] Environment variables are properly configured
- [ ] No XSS vulnerabilities (sanitize user inputs)
- [ ] CSRF protection implemented (if applicable)

**Check:**

```bash
# Check for potential secrets (common patterns)
grep -ri "api[_-]key\|secret\|password\|token" app/ --exclude-dir=node_modules | grep -v "API_KEY\|process.env" | head -5 || echo "✅ No obvious secrets found"
```

---

### ✅ Accessibility (a11y)

- [ ] All images have alt text
- [ ] Form inputs have associated labels
- [ ] Color contrast meets WCAG AA standards (4.5:1)
- [ ] Keyboard navigation works
- [ ] ARIA labels used where appropriate
- [ ] Semantic HTML used (no div soup)

**Quick Check:**

```bash
# Check for images without alt
grep -r "<img" app/components/ | grep -v "alt=" | head -5 || echo "✅ Images have alt attributes"
```

---

## 6. Project-Specific Requirements

### ✅ React Router v7 Compliance

- [ ] Using App Router patterns (not Pages Router)
- [ ] Server components used where appropriate
- [ ] Client components marked with `'use client'`
- [ ] Route handlers use correct Next.js 15 patterns (if applicable)

**Note:** This project uses React Router v7, not Next.js App Router

---

### ✅ Styling Consistency

- [ ] Using Tailwind CSS utilities (not custom CSS where avoidable)
- [ ] Color variables match brand guidelines (Navy: #1e3a5f, Orange: #e85d04)
- [ ] Spacing follows Tailwind scale (p-4, gap-6, etc.)
- [ ] Responsive breakpoints are consistent

**Check Color Usage:**

```bash
grep -r "#[0-9a-fA-F]{6}" app/components/ | head -10
```

---

### ✅ Real Estate Domain Requirements

- [ ] License number displayed in footer
- [ ] Fair housing compliance (no discriminatory language)
- [ ] IDX/MLS data displayed correctly (if applicable)
- [ ] RealScout widgets integrated properly (if applicable)

---

## 7. Documentation & Testing

### ✅ Documentation Updates

- [ ] README updated if project structure changed
- [ ] Code comments added for complex logic
- [ ] API routes documented (if applicable)
- [ ] Environment variables documented in `.env.example` (if applicable)

---

### ✅ Testing (if applicable)

- [ ] Unit tests pass (if test suite exists)
- [ ] Integration tests pass (if applicable)
- [ ] Manual testing completed for affected features

**Note:** This project may not have automated tests yet - manual testing is required

---

## 8. Git & Version Control

### ✅ Commit Quality

- [ ] Commit messages are descriptive and follow conventions
- [ ] Commits are logically grouped (one feature per commit)
- [ ] No merge conflicts
- [ ] Branch is up to date with base branch
- [ ] Unnecessary files not committed (check `.gitignore`)

**Check:**

```bash
git status
git log --oneline -5
```

---

### ✅ Code Review Readiness

- [ ] Code diff is reviewable (not too large, well-structured)
- [ ] Changes are self-contained and focused
- [ ] Related changes are grouped together
- [ ] No commented-out code or debug statements
- [ ] Console.log statements removed (or replaced with proper logging)

**Check:**

```bash
# Check for console.log in production code
grep -r "console.log\|console.debug" app/ --exclude-dir=node_modules | grep -v "// TODO" | head -10 || echo "✅ No console.log statements found"
```

---

## 9. Pre-Merge Automated Checks

### ✅ Run Quality Gates Script

- [ ] All quality gates pass: `./scripts/quality-gates/pre-merge.sh`

**Command:**

```bash
chmod +x scripts/quality-gates/*.sh  # Make executable (first time only)
./scripts/quality-gates/pre-merge.sh
```

**Expected Output:** "✅ All blocking quality gates passed! ✅ Ready to merge!"

---

## 10. Final Verification

### ✅ Manual Review

- [ ] Code has been reviewed by human (if required by team)
- [ ] All feedback from code review addressed
- [ ] No known bugs or issues remaining
- [ ] Feature works as intended in development environment

---

## 🚨 Blocking Issues (Must Fix Before Merge)

The following issues **must** be resolved before merging:

- ❌ TypeScript type errors
- ❌ ESLint errors
- ❌ Build failures
- ❌ Incorrect contact information
- ❌ Security vulnerabilities
- ❌ Broken functionality
- ❌ Missing required files (sitemap, robots.txt)

---

## ⚠️ Non-Blocking Warnings (Should Fix But Won't Block)

These issues should be addressed but won't prevent merging:

- ⚠️ Code formatting inconsistencies
- ⚠️ Minor performance optimizations
- ⚠️ Documentation improvements
- ⚠️ Test coverage gaps (if applicable)

---

## 🤖 AI Agent Workflow

When acting as an AI agent, follow this workflow:

1. **Parse the checklist** into structured tasks
2. **Run automated checks** first (sections 1, 9)
3. **Use grep/commands** to verify contact info (section 2)
4. **Check file existence** for required files (section 3)
5. **Review code patterns** for security and best practices (section 5)
6. **Compile results** into a summary report
7. **Flag blocking issues** prominently
8. **Suggest fixes** for any issues found

### Example AI Agent Summary Format:

```
PRE-MERGE CHECK RESULTS
======================

✅ PASSED (8/10 sections):
  - Code Quality Checks
  - Contact Information
  - SEO & Metadata
  - [etc...]

❌ BLOCKING ISSUES (2):
  1. TypeScript error in app/components/ContactForm.tsx:42
  2. Missing tel: link on mobile sticky bar

⚠️  WARNINGS (3):
  1. Code formatting inconsistency in 2 files
  2. [etc...]

RECOMMENDATION: DO NOT MERGE - Fix blocking issues first.
```

---

## 📝 Notes for Developers

- This checklist is **exhaustive by design** - not every item needs to be perfect
- Focus on **blocking issues** first
- Use your judgment - some items may not apply to every change
- When in doubt, run the automated quality gates script
- Keep this checklist updated as project requirements evolve

---

**Last Updated:** 2025-01-10  
**Maintained By:** Development Team  
**For Questions:** Refer to project documentation or team lead
