import { toggleTask } from "../server-state.js";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { taskId } = req.query;
    res.json(toggleTask(taskId));
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
