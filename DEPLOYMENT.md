# Deployment Guide for adray.is-a.dev

This guide will help you deploy your portfolio to `adray.is-a.dev` using the is-a.dev free subdomain service.

## Prerequisites

1. GitHub account
2. Your portfolio built (already done - `dist` folder created)
3. A hosting service (we'll use GitHub Pages)

## Step 1: Setup GitHub Repository

1. Create a new repository on GitHub (e.g., `adray-portfolio`)
2. Push your code to the repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/adray-portfolio.git
git push -u origin main
```

## Step 2: Enable GitHub Pages

1. Go to your repository settings
2. Scroll down to "Pages" section
3. Select "Deploy from a branch"
4. Choose "main" branch and "/root" folder
5. Save the settings

## Step 3: Configure Build for GitHub Pages

Update your `vite.config.ts` to set the correct base path:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/adray-portfolio/', // Replace with your repo name
})
```

## Step 4: Create GitHub Actions for Auto-Deployment

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Step 5: Register adray.is-a.dev Subdomain

1. Go to https://github.com/is-a-dev/register
2. Fork the repository
3. Create a new file: `domains/adray.json`
4. Add the following content:

```json
{
  "description": "Adri Fatwal Fiqhi's Portfolio",
  "repo": "https://github.com/YOUR_USERNAME/adray-portfolio",
  "owner": {
    "username": "YOUR_GITHUB_USERNAME",
    "email": "your.email@example.com"
  },
  "record": {
    "CNAME": "YOUR_USERNAME.github.io"
  }
}
```

5. Create a pull request with the title: "Add adray.is-a.dev"
6. Wait for approval (usually takes 24-48 hours)

## Step 6: Update GitHub Pages Custom Domain

Once your is-a.dev subdomain is approved:

1. Go to your repository settings → Pages
2. Add `adray.is-a.dev` as custom domain
3. Enable "Enforce HTTPS"

## Alternative: Using Netlify

If you prefer Netlify:

1. Connect your GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Get your Netlify URL (e.g., `amazing-site-123.netlify.app`)
5. In the is-a.dev registration, use:

```json
{
  "record": {
    "CNAME": "amazing-site-123.netlify.app"
  }
}
```

## Alternative: Using Vercel

For Vercel deployment:

1. Connect your GitHub repo to Vercel
2. Deploy automatically
3. Get your Vercel URL
4. Use the Vercel URL in your is-a.dev registration

## Notes

- The is-a.dev approval process can take 24-48 hours
- Make sure your repository is public
- Test your site thoroughly before submitting the domain request
- Keep your contact information updated in the domain registration

## Troubleshooting

- If build fails, check Node.js version compatibility
- Ensure all dependencies are properly listed in package.json
- Verify the base path in vite.config.ts matches your repository name
- Check GitHub Pages settings if deployment doesn't work

Your portfolio will be available at `https://adray.is-a.dev` once everything is set up!