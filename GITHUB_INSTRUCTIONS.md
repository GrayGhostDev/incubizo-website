# GitHub Repository Setup Instructions

Follow these steps to create a GitHub repository for the Incubizo website and push your code:

## 1. Create a new repository on GitHub

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click on the "+" icon in the top right corner and select "New repository"
3. Enter "incubizo-website" as the repository name
4. Add a description: "A modern, interactive website for Incubizo, a business incubator and innovation hub built with Next.js, HTMX, and Three.js"
5. Choose whether you want the repository to be public or private
6. Do NOT initialize the repository with a README, .gitignore, or license (since we already have these files)
7. Click "Create repository"

## 2. Push your local repository to GitHub

After creating the repository, GitHub will show you commands to push an existing repository. Run the following commands in your terminal:

```bash
# Make sure you're in the incubizo-website directory
cd incubizo-website

# Add the GitHub repository as a remote
git remote add origin https://github.com/YOUR_USERNAME/incubizo-website.git

# Push your code to GitHub
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## 3. Verify your repository

1. Go to `https://github.com/YOUR_USERNAME/incubizo-website` in your browser
2. You should see all your code and files in the repository

## 4. Additional steps (optional)

- Add collaborators: Go to Settings > Collaborators and add team members
- Set up GitHub Pages: Go to Settings > Pages to deploy your website
- Create issues for future enhancements
- Set up GitHub Actions for CI/CD

## 5. Updating the repository

After making changes to your code, use the following commands to update your GitHub repository:

```bash
# Add all changed files
git add .

# Commit your changes
git commit -m "Description of your changes"

# Push to GitHub
git push
``` 