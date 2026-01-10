# Quality Gates

Automated quality checks to ensure code quality before commits and merges.

## Available Scripts

### Pre-commit (`pre-commit.sh`)

Runs lightweight checks before each commit:

- Format check (warning only)
- Lint check
- Type check

**Usage:**

```bash
./scripts/quality-gates/pre-commit.sh
```

### Pre-merge (`pre-merge.sh`)

Runs comprehensive checks before merging:

- Format check (warning only)
- Lint check
- Type check
- Build check

**Usage:**

```bash
./scripts/quality-gates/pre-merge.sh
```

### Individual Checks

#### Lint Check (`lint-check.sh`)

Runs ESLint on all TypeScript/TSX files.

#### Type Check (`typecheck.sh`)

Runs TypeScript compiler check.

#### Build Check (`build-check.sh`)

Verifies the project builds successfully and outputs are correct.

#### Format Check (`format-check.sh`)

Checks if code is properly formatted (non-blocking).

## Integration with Git Hooks

To automatically run quality gates before commits, install the git hooks:

```bash
# Make scripts executable
chmod +x scripts/quality-gates/*.sh

# Install pre-commit hook (if using a git hook manager)
# Or manually copy:
cp scripts/quality-gates/pre-commit.sh .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

## CI/CD Integration

These scripts are designed to work in CI/CD pipelines. Example for GitHub Actions:

```yaml
- name: Run quality gates
  run: ./scripts/quality-gates/pre-merge.sh
```

## Exit Codes

- `0`: All checks passed
- `1`: One or more blocking checks failed

Scripts use `set -euo pipefail` for strict error handling.
