import express from "express";
import helmet from "helmet";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ status: "ok", service: "Shurooq Bawazir Portfolio", timestamp: new Date().toISOString() }));

const publicDir = path.join(__dirname, "public");
app.use(express.static(publicDir, { maxAge: "7d" }));
app.get(/.*/, (_req, res) => res.sendFile(path.join(publicDir, "index.html")));

app.listen(PORT, () => console.log(`Portfolio running on port ${PORT}`));
