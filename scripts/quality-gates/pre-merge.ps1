# Pre-merge Quality Gate (PowerShell version for Windows)
# Runs comprehensive quality checks before merging a branch

$ErrorActionPreference = "Stop"

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent (Split-Path -Parent $ScriptDir)

Set-Location $ProjectRoot

Write-Host "🚀 Running pre-merge quality gates..." -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

$Passed = 0
$Failed = 0
$Warnings = 0

function Run-Check {
    param(
        [string]$Name,
        [string]$ScriptPath,
        [bool]$Blocking = $true
    )
    
    Write-Host "Running: $Name..." -ForegroundColor Blue
    
    $output = & bash $ScriptPath 2>&1
    $exitCode = $LASTEXITCODE
    
    if ($exitCode -eq 0) {
        Write-Host "✅ $Name passed" -ForegroundColor Green
        $script:Passed++
        Write-Host ""
        return $true
    } else {
        if ($Blocking) {
            Write-Host "❌ $Name failed (BLOCKING)" -ForegroundColor Red
            Write-Host $output
            $script:Failed++
            Write-Host ""
            return $false
        } else {
            Write-Host "⚠️  $Name failed (NON-BLOCKING)" -ForegroundColor Yellow
            Write-Host $output
            $script:Warnings++
            Write-Host ""
            return $true
        }
    }
}

# Check if bash is available (WSL or Git Bash)
$bashAvailable = Get-Command bash -ErrorAction SilentlyContinue

if (-not $bashAvailable) {
    Write-Host "⚠️  Bash not found. Running checks directly with npm..." -ForegroundColor Yellow
    Write-Host ""
    
    # Run checks directly
    Write-Host "Running: Format Check..." -ForegroundColor Blue
    npm run format -- --check 2>&1 | Out-Null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Format check passed" -ForegroundColor Green
        $Passed++
    } else {
        Write-Host "⚠️  Format check: Some files need formatting (run 'npm run format')" -ForegroundColor Yellow
        $Warnings++
    }
    Write-Host ""
    
    Write-Host "Running: Lint Check..." -ForegroundColor Blue
    npm run lint
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Lint check passed" -ForegroundColor Green
        $Passed++
    } else {
        Write-Host "❌ Lint check failed (BLOCKING)" -ForegroundColor Red
        $Failed++
        Write-Host ""
        Write-Host "❌ Pre-merge failed: Lint check is required" -ForegroundColor Red
        exit 1
    }
    Write-Host ""
    
    Write-Host "Running: Type Check..." -ForegroundColor Blue
    npm run typecheck
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Type check passed" -ForegroundColor Green
        $Passed++
    } else {
        Write-Host "❌ Type check failed (BLOCKING)" -ForegroundColor Red
        $Failed++
        Write-Host ""
        Write-Host "❌ Pre-merge failed: Type check is required" -ForegroundColor Red
        exit 1
    }
    Write-Host ""
    
    Write-Host "Running: Build Check..." -ForegroundColor Blue
    if (Test-Path "build") {
        Remove-Item -Recurse -Force "build"
    }
    npm run build
    if ($LASTEXITCODE -eq 0) {
        if ((Test-Path "build/client") -and (Test-Path "build/server")) {
            Write-Host "✅ Build check passed" -ForegroundColor Green
            $Passed++
        } else {
            Write-Host "❌ Build output missing" -ForegroundColor Red
            $Failed++
            Write-Host ""
            Write-Host "❌ Pre-merge failed: Build check is required" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "❌ Build check failed (BLOCKING)" -ForegroundColor Red
        $Failed++
        Write-Host ""
        Write-Host "❌ Pre-merge failed: Build check is required" -ForegroundColor Red
        exit 1
    }
    Write-Host ""
} else {
    # Use bash scripts
    $formatCheck = Run-Check "Format Check" "$ScriptDir/format-check.sh" -Blocking $false
    if (-not $formatCheck) {
        $Passed--  # Don't count format as passed if it failed
    }
    
    $lintCheck = Run-Check "Lint Check" "$ScriptDir/lint-check.sh" -Blocking $true
    if (-not $lintCheck) {
        Write-Host "❌ Pre-merge failed: Lint check is required" -ForegroundColor Red
        exit 1
    }
    
    $typeCheck = Run-Check "Type Check" "$ScriptDir/typecheck.sh" -Blocking $true
    if (-not $typeCheck) {
        Write-Host "❌ Pre-merge failed: Type check is required" -ForegroundColor Red
        exit 1
    }
    
    $buildCheck = Run-Check "Build Check" "$ScriptDir/build-check.sh" -Blocking $true
    if (-not $buildCheck) {
        Write-Host "❌ Pre-merge failed: Build check is required" -ForegroundColor Red
        exit 1
    }
}

# Summary
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "✅ All blocking quality gates passed!" -ForegroundColor Green
Write-Host ""
Write-Host "Summary:"
Write-Host "  Passed: $Passed" -ForegroundColor Green
if ($Warnings -gt 0) {
    Write-Host "  Warnings: $Warnings" -ForegroundColor Yellow
}
if ($Failed -gt 0) {
    Write-Host "  Failed: $Failed" -ForegroundColor Red
    exit 1
}
Write-Host ""
Write-Host "✅ Ready to merge!" -ForegroundColor Green
exit 0
