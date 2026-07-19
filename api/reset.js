import { resetState } from "../server-state.js";

export default function handler(req, res) {
  if (req.method === "POST") {
    res.json(resetState());
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
