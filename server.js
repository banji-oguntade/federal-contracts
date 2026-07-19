import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { readState, toggleTask, resetState, updateCompletedState } from "./server-state.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, message: "Roadmap API is running" });
});

app.get("/api/tasks", (_req, res) => {
  res.json(readState());
});

app.post("/api/tasks/:taskId/toggle", (req, res) => {
  const { taskId } = req.params;
  res.json(toggleTask(taskId));
});

app.post("/api/tasks", (req, res) => {
  const { completed } = req.body || {};
  res.json(updateCompletedState(completed || {}));
});

app.post("/api/reset", (_req, res) => {
  res.json(resetState());
});

app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Roadmap API listening on http://localhost:${port}`);
});
