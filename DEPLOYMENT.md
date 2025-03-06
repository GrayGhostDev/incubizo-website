# Deployment Guide for Incubizo Website

This guide provides instructions for deploying the Incubizo website to various platforms.

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git

## Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest platform to deploy Next.js applications.

### Steps:

1. Create an account on [Vercel](https://vercel.com) if you don't have one
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Login to Vercel:
   ```bash
   vercel login
   ```
4. Deploy the website:
   ```bash
   vercel
   ```
5. For production deployment:
   ```bash
   vercel --prod
   ```

Vercel will automatically detect that you're using Next.js and configure the build settings accordingly.

## Option 2: Deploy to Netlify

### Steps:

1. Create an account on [Netlify](https://netlify.com) if you don't have one
2. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Login to Netlify:
   ```bash
   netlify login
   ```
4. Deploy the website:
   ```bash
   netlify deploy
   ```
5. For production deployment:
   ```bash
   netlify deploy --prod
   ```

## Option 3: Self-Hosting

### Build the Application

1. Build the Next.js application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

### Deploy to a VPS or Cloud Provider

1. Set up a server with Node.js installed
2. Clone your repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/incubizo-website.git
   cd incubizo-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build the application:
   ```bash
   npm run build
   ```
5. Start the server:
   ```bash
   npm start
   ```

### Using PM2 for Process Management

1. Install PM2:
   ```bash
   npm install -g pm2
   ```
2. Start the application with PM2:
   ```bash
   pm2 start npm --name "incubizo-website" -- start
   ```
3. Set up PM2 to start on system boot:
   ```bash
   pm2 startup
   pm2 save
   ```

## Environment Variables

If your application uses environment variables, create a `.env.local` file with the following variables:

```
# Example environment variables
NEXT_PUBLIC_API_URL=https://api.example.com
```

For production, set these environment variables on your hosting platform.

## Custom Domain Setup

### Vercel

1. Go to your project on the Vercel dashboard
2. Navigate to "Settings" > "Domains"
3. Add your custom domain and follow the instructions

### Netlify

1. Go to your project on the Netlify dashboard
2. Navigate to "Settings" > "Domain management"
3. Click "Add custom domain" and follow the instructions

## Continuous Deployment

Both Vercel and Netlify support continuous deployment from GitHub. Connect your GitHub repository to automatically deploy when you push changes to the main branch. 