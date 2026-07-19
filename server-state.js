import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const defaultStateFile = path.join(__dirname, "data", "roadmap-state.json");

function ensureFile(filePath = defaultStateFile) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({ completed: {} }, null, 2));
  }
}

function readState(filePath = defaultStateFile) {
  ensureFile(filePath);

  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = JSON.parse(raw);
    return { completed: parsed.completed || {} };
  } catch {
    return { completed: {} };
  }
}

function updateCompletedState(completed, filePath = defaultStateFile) {
  ensureFile(filePath);
  const nextState = { completed: { ...completed } };
  fs.writeFileSync(filePath, JSON.stringify(nextState, null, 2));
  return nextState;
}

function toggleTask(taskId, filePath = defaultStateFile) {
  const current = readState(filePath);
  const nextCompleted = {
    ...current.completed,
    [taskId]: !current.completed[taskId],
  };

  return updateCompletedState(nextCompleted, filePath);
}

function resetState(filePath = defaultStateFile) {
  return updateCompletedState({}, filePath);
}

export { defaultStateFile, ensureFile, readState, updateCompletedState, toggleTask, resetState };
