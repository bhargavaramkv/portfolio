# 🚀 Deployment Guide

Your portfolio is ready to deploy! Here are the easiest ways to get it live on the internet.

## Before Deploying

1. **Add your profile image:**
   - Save your profile picture as `profile.jpg` in the `public` folder
   - Commit and push: `git add . && git commit -m "Add profile image" && git push`

2. **Get your Gemini API Key:**
   - Go to: https://aistudio.google.com/
   - Create/copy your API key
   - You'll need this for deployment

---

## Option 1: Vercel (Recommended - Easiest)

Vercel is the easiest and fastest way to deploy. It's free and takes 2 minutes.

### Steps:

1. **Go to Vercel:**
   - Visit: https://vercel.com/
   - Click "Sign Up" or "Login" (use your GitHub account)

2. **Import Your Project:**
   - Click "Add New..." → "Project"
   - Select your `portfolio` repository
   - Click "Import"

3. **Configure:**
   - Vercel will auto-detect Vite
   - Click "Environment Variables"
   - Add: 
     - Name: `VITE_GEMINI_API_KEY`
     - Value: [Your Gemini API key]

4. **Deploy:**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your site will be live at: `https://your-project.vercel.app`

### Auto-Deploy:
Every time you push to GitHub, Vercel will automatically redeploy! 🎉

---

## Option 2: Netlify

Netlify is another great free option.

### Steps:

1. **Go to Netlify:**
   - Visit: https://netlify.com/
   - Click "Sign Up" (use your GitHub account)

2. **New Site:**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your `portfolio` repository

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Show advanced" → "New variable"
   - Add:
     - Key: `VITE_GEMINI_API_KEY`
     - Value: [Your Gemini API key]

4. **Deploy:**
   - Click "Deploy site"
   - Wait 2-3 minutes
   - Your site will be live at: `https://random-name.netlify.app`
   - You can change the domain in settings

---

## Option 3: GitHub Pages (Free, but requires extra setup)

GitHub Pages is free but requires building locally.

### Steps:

1. **Install GitHub Pages package:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   Add these lines:
   ```json
   "homepage": "https://bhargavaramkv.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repo settings
   - Pages → Source → Select `gh-pages` branch
   - Save

**Note:** GitHub Pages doesn't support environment variables, so J.A.R.V.I.S. chat won't work unless you hardcode the API key (not recommended).

---

## Recommended: Use Vercel

**Why Vercel?**
- ✅ Easiest setup (2 minutes)
- ✅ Free forever for personal projects
- ✅ Auto-deploy on every push
- ✅ Environment variables support
- ✅ Custom domains
- ✅ HTTPS by default
- ✅ Lightning fast CDN

---

## After Deployment

1. **Test your site:**
   - Check all sections load
   - Test J.A.R.V.I.S. chat
   - Test on mobile

2. **Custom Domain (Optional):**
   - Buy a domain (e.g., bhargavaram.dev)
   - Add it in Vercel/Netlify settings
   - Update DNS records

3. **Share your portfolio:**
   - Add the URL to your GitHub profile
   - Share on LinkedIn
   - Add to your resume

---

## Quick Deploy Commands

```bash
# 1. Add your profile image to public/profile.jpg
# 2. Commit and push
git add .
git commit -m "Add profile image and prepare for deployment"
git push

# 3. Go to Vercel.com and import your repo
# That's it! 🎉
```

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com/
- Your repo: https://github.com/bhargavaramkv/portfolio

---

**Pro Tip:** Use Vercel. It's the easiest and most reliable option for React/Vite projects.
