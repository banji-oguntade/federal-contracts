import { readState, toggleTask, resetState, updateCompletedState } from "../server-state.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.json(readState());
  } else if (req.method === "POST") {
    const { completed } = req.body || {};
    res.json(updateCompletedState(completed || {}));
  }
}