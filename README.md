# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.







--> instead of local server json server(db.json) - we used render for getting public url

Perfect! 👍 Now I have the full picture. Your db.json contains admin, users, and courses. Let’s set up your backend with JSON Server on Render and connect it to your React frontend so everything works on Vercel. I’ll give you copy-paste ready instructions.

1️⃣ Backend Setup (JSON Server)

Step 1: Create package.json

Inside your backend folder:

npm init -y
npm install json-server


Edit package.json scripts section to:

{
  "name": "course-backend",
  "version": "1.0.0",
  "scripts": {
    "start": "json-server --host 0.0.0.0 --port 3000 --watch db.json"
  },
  "dependencies": {
    "json-server": "^0.17.3"
  }
}


✅ This tells Render how to start your backend.

Step 2: Push backend to GitHub

Create a new GitHub repo, e.g., course-backend-json.

Push your backend folder (with db.json + package.json) to GitHub:

cd backend
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main


Step 3: Deploy Backend on Render

Go to Render
 → New Web Service → Connect GitHub Repo.

Select your backend repo.

Settings:

Environment: Node

Build Command: npm install

Start Command: npm start

Port: Leave default (3000)

Region: Pick closest to you

Click Create Web Service

After deployment, Render will give a URL like:

https://course-backend-json.onrender.com
