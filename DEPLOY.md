# GitHub Pages Deployment

This project is configured to auto-deploy to GitHub Pages on every push to `main`.

## Setup (One-time)

After pushing this to GitHub, enable GitHub Pages:

1. Go to your repo settings: https://github.com/anowell/nf-tiers/settings/pages
2. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
3. Push to `main` and the site will automatically deploy

## Site URL

Once deployed, your site will be available at:
**https://anowell.github.io/nf-tiers**

## How it Works

- `.github/workflows/deploy.yml` - Workflow that builds and deploys on push to main
- `svelte.config.js` - Configured with base path `/nf-tiers` for GitHub Pages
- `static/.nojekyll` - Tells GitHub Pages to skip Jekyll processing
