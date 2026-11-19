# NammaPros Frontend

Customer-facing Next.js 16 web application for NammaPros home services booking.

This is a standalone, production-ready frontend project. It does **not** require any monorepo tooling or shared workspace setup to build or deploy.

---

## Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

| Variable | Required | Description | Example |
|---|---|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Yes | URL of the backend API for browser requests | `https://api.yourdomain.com` or `http://localhost:8000` |
| `API_BASE_URL` | Optional | Server-side API URL for Next.js SSR data fetching | `https://api.yourdomain.com` or `http://127.0.0.1:8000` |
| `NEXT_PUBLIC_SITE_URL` | Optional | Canonical URL of the customer site | `https://www.yourdomain.com` |
| `NEXT_PUBLIC_PARTNER_APP_URL`| Optional | URL of the partner / technician portal | `https://pro.yourdomain.com` |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Optional | Firebase web API key for phone authentication | `AIza...` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Optional | Firebase auth domain | `project.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Optional | Firebase project ID | `your-firebase-project` |

---

## Deployment Options

### 1. Vercel (Recommended for Next.js)

1. Push this folder to GitHub (as its own repository or inside a repository).
2. Import the project into [Vercel](https://vercel.com).
3. If deployed from a subfolder, set **Root Directory** to `frontend`. If it is its own repository, leave Root Directory as `./`.
4. Vercel automatically detects Next.js.
5. In **Project Settings > Environment Variables**, add:
   - `NEXT_PUBLIC_API_BASE_URL` (e.g. `https://api.yourdomain.com`)
   - `API_BASE_URL` (e.g. `https://api.yourdomain.com`)
   - `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.yourdomain.com`)
6. Click **Deploy**.

### 2. Netlify

1. Connect the repository to [Netlify](https://www.netlify.com).
2. Set base directory to `frontend` (or `./`).
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Configure environment variables in Netlify console.
6. Deploy.

### 3. Google Cloud Run / Docker

Build and run using the included standalone `Dockerfile`:

```bash
# Build the Docker image
docker build \
  --build-arg NEXT_PUBLIC_API_BASE_URL="https://api.yourdomain.com" \
  -t nammapros-frontend .

# Run locally on port 8080
docker run -p 8080:8080 nammapros-frontend
```

To deploy directly to Google Cloud Run:
```bash
gcloud run deploy nammapros-frontend \
  --source . \
  --region asia-south1 \
  --allow-unauthenticated \
  --set-env-vars NEXT_PUBLIC_API_BASE_URL="https://api.yourdomain.com"
```

### 4. Firebase App Hosting

1. In the Firebase console, navigate to **App Hosting**.
2. Connect your GitHub repository.
3. If deploying from this monorepo, set Root directory to `frontend`.
4. Configure the environment variables (`NEXT_PUBLIC_API_BASE_URL`, `API_BASE_URL`, etc.) with **BUILD and RUNTIME** availability.
5. Deploy.

### 5. Render

1. Create a new **Web Service** on [Render](https://render.com).
2. Connect the Git repository.
3. If in a monorepo, set **Root Directory** to `frontend`.
4. Environment: **Node**
5. Build Command: `npm install && npm run build`
6. Start Command: `npm start`
7. Add your environment variables in the Render dashboard.

---

## Available Scripts

- `npm run dev`: Starts local development server on port 3000.
- `npm run build`: Creates an optimized production build.
- `npm run start`: Runs the built production application.
- `npm run typecheck`: Runs TypeScript compiler check with zero emit.
- `npm run lint`: Runs ESLint checks.
- `npm run test`: Runs unit and integration tests with Vitest.
