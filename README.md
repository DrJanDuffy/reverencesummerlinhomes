# Reference Summerlin Homes - Dr. Janet Duffy

A modern, production-ready real estate website built with React Router v7, optimized for the Las Vegas market.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/reverencesummerlinhomes)

## Features

- 🚀 Server-side rendering with React Router v7
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 🏠 Real estate focused (Las Vegas market)
- 🔗 RealScout, Follow Up Boss, Homebot integrations
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
# or use Vercel CLI for better integration
vercel dev
```

Your application will be available at `http://localhost:5173`.

### Code Quality

Run linting and formatting:

```bash
# Lint code
npm run lint

# Format code
npm run format

# Validate (typecheck + lint)
npm run validate
```

## Building for Production

Create a production build using Vercel CLI (recommended):

```bash
vercel build
# or
npm run vercel:build
```

For local builds:

```bash
npm run build
```

## Deployment

### Vercel Deployment (Recommended)

This project is optimized for Vercel deployment with automatic CI/CD:

1. **Connect your GitHub repository to Vercel**
2. **Set up environment variables in Vercel dashboard:**
   - `VERCEL_TOKEN` - Your Vercel API token
   - `VERCEL_ORG_ID` - Your Vercel organization ID
   - `VERCEL_PROJECT_ID` - Your Vercel project ID

3. **Automatic deployments:**
   - Push to `main` → Production deployment
   - Push to other branches → Preview deployments
   - Pull requests → Preview deployments with PR comments

### GitHub Actions CI/CD

The project includes comprehensive GitHub Actions workflows:

- **CI Pipeline**: Runs on all PRs and pushes (lint, typecheck, build)
- **Preview Deployments**: Auto-deploy non-main branches to Vercel previews
- **Production Deployments**: Auto-deploy main branch to production

### Manual Deployment

For manual deployments:

```bash
# Deploy to preview
vercel --prod=false

# Deploy to production
vercel --prod=true
```

### Docker Deployment

This template includes Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

```bash
# Build and run with Docker
docker build -t reverencesummerlinhomes .
docker run -p 3000:3000 reverencesummerlinhomes
```

## Tech Stack

- **Framework**: React Router v7 with SSR
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions
- **Real Estate Tools**: RealScout, Follow Up Boss, Homebot

## Project Structure

```
├── app/
│   ├── components/     # Reusable UI components
│   ├── routes/         # Route components
│   ├── root.tsx        # Root component
│   └── app.css         # Global styles
├── .github/workflows/  # GitHub Actions CI/CD
├── vercel.json        # Vercel configuration
├── .cursorrules       # Cursor AI rules
└── package.json       # Dependencies and scripts
```

## Real Estate Features

- **Property Search**: Integrated with RealScout
- **Lead Management**: Follow Up Boss CRM integration
- **Loan Calculations**: Homebot integration
- **Market Insights**: Las Vegas market data
- **SEO Optimized**: Core Web Vitals optimization

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ for Dr. Janet Duffy's Las Vegas real estate business using React Router v7 Framework Mode.

## Auto-Deployment Test

This commit tests the auto-deployment functionality after fixing the GitHub remote URL.
