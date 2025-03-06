# Deploying to GitHub Pages

This guide provides step-by-step instructions for deploying the Incubizo website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Step 1: Push Your Code to GitHub

Follow the instructions in `GITHUB_INSTRUCTIONS.md` to create a GitHub repository and push your code.

## Step 2: Configure GitHub Pages

1. Go to your GitHub repository (https://github.com/YOUR_USERNAME/incubizo-website)
2. Click on "Settings" tab
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "GitHub Actions"
5. Click "Save"

## Step 3: Create a GitHub Actions Workflow

1. Create a `.github/workflows` directory in your repository:
   ```bash
   mkdir -p .github/workflows
   ```

2. Create a file named `deploy.yml` in the `.github/workflows` directory with the following content:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ["main"]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   concurrency:
     group: "pages"
     cancel-in-progress: false

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: "18"
             cache: 'npm'
         - name: Setup Pages
           uses: actions/configure-pages@v3
           with:
             static_site_generator: next
         - name: Install dependencies
           run: npm ci
         - name: Build with Next.js
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: ./out

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```

3. Commit and push the workflow file:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push
   ```

## Step 4: Update Next.js Configuration

1. Update your `next.config.ts` file to support static exports:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     basePath: process.env.NODE_ENV === 'production' ? '/incubizo-website' : '',
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. Commit and push the changes:
   ```bash
   git add next.config.ts
   git commit -m "Update Next.js config for GitHub Pages"
   git push
   ```

## Step 5: Verify Deployment

1. Go to your GitHub repository
2. Click on the "Actions" tab
3. You should see a workflow running (or completed)
4. Once completed, your site will be available at:
   `https://YOUR_USERNAME.github.io/incubizo-website`

## Troubleshooting

If you encounter any issues:

1. Check the GitHub Actions logs for errors
2. Ensure your repository is public (or you have GitHub Pro for private repositories)
3. Make sure the `next.config.ts` file is correctly configured
4. Verify that all paths in your application use relative URLs

## Updating Your Site

Any time you push changes to the `main` branch, the GitHub Actions workflow will automatically rebuild and redeploy your site. 