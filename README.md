# Shurooq Bawazir 

A modern, dark, interactive portfolio built with React, Node.js, Express and Docker.

## Stack
- React + Vite
- Node.js + Express
- Framer Motion
- Lucide React
- Docker / Docker Compose

## Local development

```bash
npm run install:all
npm install
npm run dev
```

Frontend: http://localhost:5173  
Backend health endpoint: http://localhost:8080/api/health

## Production with Docker

```bash
docker compose up --build
```

Open: http://localhost:8080

## Contact
- Email: shurooqbawazir@gmail.com
- LinkedIn: https://www.linkedin.com/in/shurooq-bawazir/
- GitHub: https://github.com/shurooqbawazir4

## Public website

URL: https://shurooqbawazir4.github.io/My-portfolio/

GitHub Actions builds and publishes the frontend to GitHub Pages on pushes to `main`.
The repository's Settings > Pages > Source must be set to **GitHub Actions**.
Asset URLs use Vite's base path so images and the publication PDF work on both Pages and local Docker.

GitHub Pages serves the static portfolio; the Express `/api/health` endpoint is available only in the Docker deployment.
