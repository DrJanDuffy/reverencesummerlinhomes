# Graphite Configuration

This directory contains configuration for [Graphite](https://graphite.dev) - a tool for managing git workflows and stacked pull requests.

## Setup

### Installation

Graphite can be installed via npm (if available) or by downloading directly from their website:

1. Visit [graphite.dev](https://graphite.dev) and follow their installation guide
2. Or check for the official CLI installation method

### Configuration

The `repo_config.json` file defines:

- **GitHub Integration**: Automatic PR checks and branch syncing
- **Merge Strategy**: Default to squash merges
- **Quality Gates**: Pre-merge and pre-commit checks
- **Commit Messages**: Auto-formatting and templates
- **Branch Naming**: Consistent branch naming conventions

## Workflow with Quality Gates

Graphite integrates with our quality gates:

1. **Before Commit**: Pre-commit hook runs lightweight checks
2. **Before Push**: Quality gates can be triggered
3. **Before Merge**: Full pre-merge checklist runs

## Stacked Pull Requests

Graphite supports "stacked" PRs - multiple small PRs that build on each other:

```
main
  └── feature/auth-system (PR #1)
        └── feature/auth-login (PR #2)
              └── feature/auth-logout (PR #3)
```

This allows for easier, more focused code reviews.

## Integration with Quality Gates

The quality gates scripts in `scripts/quality-gates/` are designed to work with Graphite:

- Pre-commit checks run automatically via git hooks
- Pre-merge checks are triggered before PR creation/merge
- All checks must pass before code can be merged

## Manual Setup (if Graphite CLI not available)

If Graphite CLI is not available, the quality gates still work independently:

```bash
# Run pre-merge checks manually
npm run quality:pre-merge

# Or use the script directly
./scripts/quality-gates/pre-merge.sh
```

## Resources

- [Graphite Documentation](https://docs.graphite.dev)
- [Graphite GitHub Integration](https://docs.graphite.dev/github-integration)
- [Stacked PRs Guide](https://docs.graphite.dev/stacked-prs)
