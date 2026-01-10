# Scripts Directory

This directory contains utility scripts for development, quality assurance, and automation.

## Directory Structure

```
scripts/
├── quality-gates/          # Automated quality checks
│   ├── lint-check.sh       # ESLint verification
│   ├── typecheck.sh        # TypeScript type checking
│   ├── build-check.sh      # Build verification
│   ├── format-check.sh     # Prettier format checking
│   ├── pre-commit.sh       # Pre-commit hook script
│   ├── pre-merge.sh        # Pre-merge quality gate
│   ├── pre-merge.ps1       # PowerShell version (Windows)
│   └── README.md           # Quality gates documentation
├── setup-git-hooks.js      # Git hooks installer
└── README.md               # This file
```

## Quality Gates

See [scripts/quality-gates/README.md](./quality-gates/README.md) for detailed documentation on quality gate scripts.

### Quick Usage

```bash
# Run all pre-merge checks
npm run quality:pre-merge

# Or directly:
./scripts/quality-gates/pre-merge.sh

# On Windows (PowerShell):
powershell -ExecutionPolicy Bypass -File scripts/quality-gates/pre-merge.ps1
```

## Git Hooks Setup

Install git hooks to automatically run quality checks:

```bash
npm run prepare
# Or manually:
node scripts/setup-git-hooks.js
```

This installs a pre-commit hook that runs quality gates before each commit.

## Available npm Scripts

The following scripts are available in `package.json`:

- `npm run quality:pre-commit` - Run pre-commit checks
- `npm run quality:pre-merge` - Run comprehensive pre-merge checks
- `npm run quality:lint` - Run linting checks
- `npm run quality:typecheck` - Run type checking
- `npm run quality:build` - Run build verification
- `npm run quality:format` - Check code formatting

## Platform Compatibility

Scripts are provided in multiple formats for cross-platform compatibility:

- **Bash scripts** (`.sh`) - Works on Unix-like systems (Linux, macOS, WSL, Git Bash)
- **PowerShell scripts** (`.ps1`) - Native Windows support
- **npm scripts** - Fallback for all platforms

The scripts automatically detect the platform and use the appropriate method.

## Adding New Scripts

When adding new scripts:

1. Place in appropriate subdirectory or root of `scripts/`
2. Make executable: `chmod +x scripts/your-script.sh`
3. Document in this README
4. Add npm script alias in `package.json` if commonly used
5. Update `.gitignore` if script generates temporary files

## Best Practices

- Use `set -euo pipefail` in bash scripts for error handling
- Use `$ErrorActionPreference = "Stop"` in PowerShell scripts
- Exit with appropriate codes (0 = success, 1 = failure)
- Provide clear error messages and suggestions
- Test scripts on both Unix-like and Windows systems
