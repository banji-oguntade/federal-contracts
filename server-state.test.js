import test from "node:test";
import assert from "node:assert/strict";
import fs from "fs";
import os from "os";
import path from "path";
import { toggleTask, resetState, readState, updateCompletedState } from "./server-state.js";

test("toggleTask updates the shared completion state", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "roadmap-"));
  const tempFile = path.join(tempDir, "state.json");

  const updated = toggleTask("sam-registration", tempFile);

  assert.equal(updated.completed["sam-registration"], true);
  assert.equal(readState(tempFile).completed["sam-registration"], true);
});

test("resetState clears all task completions", () => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "roadmap-"));
  const tempFile = path.join(tempDir, "state.json");

  updateCompletedState({ "sam-registration": true, "uei": true }, tempFile);
  const resetStateResult = resetState(tempFile);

  assert.deepEqual(resetStateResult.completed, {});
  assert.deepEqual(readState(tempFile).completed, {});
});
