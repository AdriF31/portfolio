# Quick Setup Guide for adray.is-a.dev

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository named `adray-portfolio`
2. Make sure it's **public** (required for GitHub Pages)
3. Don't initialize with README (we already have files)

### 2. Push Your Code

Run these commands in your terminal:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Set main branch
git branch -M main

# Add your GitHub repository (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/adray-portfolio.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy when you push code

### 4. Register adray.is-a.dev Domain

1. Go to https://github.com/is-a-dev/register
2. Click **Fork** to fork the repository
3. In your forked repository, create a new file: `domains/adray.json`
4. Copy the content from the `adray.json` file in your portfolio project
5. **Update the placeholders:**
   - Replace `YOUR_USERNAME` with your actual GitHub username
   - Replace `your.email@example.com` with your email
6. Create a pull request with title: "Add adray.is-a.dev"
7. Wait for approval (usually 24-48 hours)

### 5. Configure Custom Domain (After Approval)

Once your domain is approved:

1. Go to your repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `adray.is-a.dev`
3. Check **Enforce HTTPS**
4. Save

### 6. Update Base Path (Important!)

In your `vite.config.ts`, make sure the base path matches your repository name:

```typescript
base: process.env.NODE_ENV === 'production' ? '/adray-portfolio/' : '/'
```

If your repository name is different, update `/adray-portfolio/` accordingly.

## Alternative: Quick Deploy with Netlify

If you prefer Netlify (easier setup):

1. Go to [Netlify](https://netlify.com)
2. Connect your GitHub repository
3. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy
5. Get your Netlify URL (e.g., `amazing-site-123.netlify.app`)
6. In `adray.json`, use:
   ```json
   {
     "record": {
       "CNAME": "amazing-site-123.netlify.app"
     }
   }
   ```

## Verification

After everything is set up:

1. Your site should be accessible at `https://YOUR_USERNAME.github.io/adray-portfolio/`
2. After domain approval: `https://adray.is-a.dev`

## Troubleshooting

- **Build fails**: Check Node.js version in GitHub Actions
- **404 errors**: Verify base path in vite.config.ts
- **Domain not working**: Wait for is-a.dev approval and check DNS propagation
- **Assets not loading**: Ensure base path is correctly set

## Need Help?

- Check the detailed `DEPLOYMENT.md` file
- GitHub Pages documentation
- is-a.dev documentation on their GitHub

Your portfolio will be live at `https://adray.is-a.dev` once everything is configured! 🚀