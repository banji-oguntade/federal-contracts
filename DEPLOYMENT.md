# Deployment Guide

This app requires deploying both the frontend and backend.

## Architecture

- **Frontend**: React + Vite (static site)
- **Backend**: Node.js + Express (API server with file-based state)

---

## Step 1: Deploy Backend to Railway

Railway provides free persistent storage for Node.js apps.

### 1a. Push to GitHub

```bash
git add .
git commit -m "Set up for split deployment"
git push
```

### 1b. Create Railway Project

1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click **"New Project"** → **"Deploy from GitHub repo"**
4. Select your repository
5. Railway auto-detects `server.js` as the start command
6. Click **"Deploy"** ✅

### 1c. Get Backend URL

After deployment, go to your Railway project:
- Click **"Settings"** tab
- Find **"Domain"** section
- Copy the public URL (e.g., `https://federal-roadmap-production.railway.app`)

**Save this URL** — you'll need it for the frontend.

---

## Step 2: Deploy Frontend to Vercel

### 2a. Create Vercel Project

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New..."** → **"Project"**
3. Select your GitHub repository
4. Vercel auto-detects Vite config
5. **Before deploying**, add an environment variable:

   | Key | Value |
   | --- | --- |
   | `VITE_API_BASE_URL` | `https://federal-roadmap-production.railway.app` |
   
   Replace with your actual Railway URL from Step 1c.

6. Click **"Deploy"** ✅

### 2b. Your App is Live!

Frontend: `https://your-project.vercel.app`
Backend API: `https://federal-roadmap-production.railway.app/api`

---

## Local Development

### Run both servers:

**Terminal 1** (Frontend):
```bash
npm run dev
```
Open http://localhost:5173

**Terminal 2** (Backend):
```bash
npm run server
```
Runs on http://localhost:3001

The frontend's `.env.local` is pre-configured to use `http://localhost:3001`.

---

## Troubleshooting

### "Unable to update task state" error

**On production**: Make sure `VITE_API_BASE_URL` environment variable is set in Vercel and matches your Railway backend URL.

**Locally**: Make sure both `npm run dev` and `npm run server` are running in separate terminals.

### Backend API not responding

Check Railway project logs:
1. Go to [railway.app](https://railway.app)
2. Select your project
3. Click **"Deployments"** tab
4. View logs for errors

---

## Optional: Custom Domain

### For Frontend (Vercel)
Vercel dashboard → Settings → Domains → Add custom domain

### For Backend (Railway)
Railway dashboard → Settings → Domain → Set custom domain
