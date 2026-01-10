# Vercel Code Reviews Setup Guide

This guide explains how to enable and use Vercel's Code Reviews (Beta) feature for this project.

## Overview

Vercel Code Reviews (Beta) is an AI-powered code review feature that:
- Automatically reviews draft PRs before they're ready
- Catches bugs, security issues, and performance problems
- Integrates with your GitHub repository
- Works alongside your existing quality gates

## Prerequisites

1. **Vercel Observability Plus** subscription
   - Required for Code Reviews feature
   - Includes 10 free investigations per month
   - Auto-reloads credit to $25 when below $5

2. **GitHub Integration**
   - Repository must be connected to Vercel
   - GitHub App must have repository access

## Setup Instructions

### Step 1: Enable Code Reviews in Vercel Dashboard

1. Navigate to your Vercel project dashboard
2. Go to **Settings** → **Git**
3. Scroll to **Code Reviews** section
4. Toggle **"Enable Code Reviews"** to ON
5. Select **"All repositories"** or specific repositories to review

### Step 2: Configure Review Settings

**Review Draft PRs:**
- ✅ Enabled (recommended): Reviews draft PRs automatically
- Allows catching issues early before PR is ready for review

**Review Scope:**
- All repositories (recommended for consistent reviews)
- Or select specific repositories

### Step 3: Integration with Existing Quality Gates

Vercel Code Reviews works **alongside** your existing quality gates:

```
┌─────────────────────────────────────────┐
│   Developer Opens PR                    │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│   GitHub Actions: PR Review Workflow    │
│   • Quality Gates (format, lint, type)  │
│   • Contact Info Checks                 │
│   • Security Checks                     │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│   Vercel Code Reviews (Beta)            │
│   • AI-powered bug detection            │
│   • Security vulnerability scanning     │
│   • Performance issue detection         │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│   Human Review                          │
│   • Review feedback from both systems   │
│   • Address issues                      │
└─────────────────────────────────────────┘
```

## How It Works

1. **Automatic Trigger:**
   - When a PR is opened or updated
   - Vercel automatically analyzes the code changes
   - Reviews draft PRs (if enabled)

2. **Review Process:**
   - AI analyzes code for:
     - Bug patterns
     - Security vulnerabilities
     - Performance issues
     - Best practice violations
   - Results appear in Vercel dashboard

3. **Feedback:**
   - Review comments appear in Vercel dashboard
   - Can be integrated with GitHub PR comments (if configured)
   - Issues are categorized by severity

## Viewing Reviews

### In Vercel Dashboard:
1. Navigate to your project
2. Go to **Deployments** or **Code Reviews** tab
3. Select a PR to view review results
4. See categorized issues and suggestions

### In GitHub:
- If integrated, review comments may appear as PR comments
- Check PR status checks for Vercel review status

## Best Practices

1. **Use with Quality Gates:**
   - Keep your existing quality gates (they're faster and more specific)
   - Vercel Code Reviews catches AI-detected issues your gates might miss
   - Both systems complement each other

2. **Review Draft PRs:**
   - Enable draft PR reviews to catch issues early
   - Fix issues before requesting human review
   - Reduces back-and-forth in PR comments

3. **Cost Management:**
   - Monitor credit usage in Vercel dashboard
   - Each review consumes credit (amount varies)
   - Set budget alerts if needed

## Troubleshooting

### Code Reviews Not Appearing

**Check:**
1. Observability Plus subscription is active
2. Repository is connected to Vercel
3. Code Reviews feature is enabled in settings
4. Sufficient credit available ($16.69 minimum recommended)

**Solution:**
- Verify GitHub App permissions
- Check Vercel billing/credits page
- Contact Vercel support if issues persist

### Reviews Taking Too Long

**Solution:**
- Reviews are processed asynchronously
- Check Vercel dashboard after 1-2 minutes
- Larger PRs may take longer

### False Positives

**Solution:**
- Code Reviews use AI - may have false positives
- Review suggestions critically
- Use quality gates for definitive rules

## Integration with This Project

Your project already has:
- ✅ Comprehensive quality gates (`scripts/quality-gates/`)
- ✅ GitHub Actions CI workflow (`.github/workflows/ci.yml`)
- ✅ PR review workflow (`.github/workflows/pr-review.yml`)
- ✅ Pre-merge checklist (`PRE_MERGE_CHECKLIST.md`)

**Vercel Code Reviews adds:**
- AI-powered pattern detection
- Security vulnerability scanning
- Performance issue detection
- Additional layer of code quality assurance

## Next Steps

1. Enable Code Reviews in Vercel dashboard
2. Test with a draft PR
3. Review results and adjust settings if needed
4. Monitor credit usage
5. Integrate feedback into development workflow

## Resources

- [Vercel Code Reviews Documentation](https://vercel.com/docs/workflow-collaboration/code-reviews)
- [Vercel Observability Plus](https://vercel.com/pricing)
- Project Quality Gates: `scripts/quality-gates/README.md`
- Pre-Merge Checklist: `PRE_MERGE_CHECKLIST.md`

---

**Last Updated:** 2025-01-10  
**Maintained By:** Development Team
