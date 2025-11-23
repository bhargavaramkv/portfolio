# Setup Guide

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Create environment file**
   ```bash
   cp .env.example .env
   ```

3. **Add your Gemini API key to `.env`**
   - Get your key from: https://aistudio.google.com/
   - Edit `.env` and replace `your_api_key_here` with your actual key

4. **Run locally**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173

## Git Push to GitHub

1. **Create a new repository on GitHub** (don't initialize with README)

2. **Add remote and push**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

## Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com/
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variable:
   - Name: `VITE_GEMINI_API_KEY`
   - Value: Your Gemini API key
6. Click "Deploy"

## Deploy to Netlify

1. Push your code to GitHub
2. Go to https://netlify.com/
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variable:
   - Key: `VITE_GEMINI_API_KEY`
   - Value: Your Gemini API key
7. Click "Deploy site"

## Clean Up Old Directory

After confirming everything works, you can delete the old directory:
```bash
rmdir /s /q "bhargava-ram-k-v---portfolio (1)"
```

Then commit the cleanup:
```bash
git add .
git commit -m "Remove old directory structure"
git push
```
