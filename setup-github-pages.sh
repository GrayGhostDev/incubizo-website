#!/bin/bash

# Script to set up GitHub Pages for the Incubizo website

echo "Setting up GitHub Pages for Incubizo website..."

# Create .github/workflows directory if it doesn't exist
mkdir -p .github/workflows

# Create GitHub Actions workflow file
cat > .github/workflows/deploy.yml << 'EOL'
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
EOL

echo "GitHub Actions workflow file created at .github/workflows/deploy.yml"

# Add and commit the changes
git add .github/workflows/deploy.yml
git add next.config.ts
git commit -m "Set up GitHub Pages deployment"

echo "Changes committed. You can now push to GitHub with:"
echo "git push origin main"

echo "After pushing, go to your GitHub repository settings to enable GitHub Pages."
echo "Your site will be available at: https://YOUR_USERNAME.github.io/incubizo-website" 