const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create
router.post("/", auth, async (req, res) => {
  const { title, description, due_date } = req.body;
  if (!title) return res.status(400).json({ message: "Title required" });

  const task = await Task.create({
    title, description, due_date: due_date || null, user_id: req.user.id
  });
  res.status(201).json(task);
});

// Get all for user (with optional status filter)
router.get("/", auth, async (req, res) => {
  const status = req.query.status; // optional: "pending" or "done"
  const where = { user_id: req.user.id };
  if (status) where.status = status;
  const tasks = await Task.findAll({ where, order: [["created_at","DESC"]] });
  res.json(tasks);
});

// Update task (PUT)
router.put("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (!task || task.user_id !== req.user.id) return res.status(404).json({ message: "Not found" });

  const { title, description, due_date, status } = req.body;
  await task.update({ title, description, due_date, status });
  res.json(task);
});

// Delete
router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (!task || task.user_id !== req.user.id) return res.status(404).json({ message: "Not found" });
  await task.destroy();
  res.json({ message: "Deleted" });
});

// Mark done (PATCH)
router.patch("/:id/done", auth, async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);
  if (!task || task.user_id !== req.user.id) return res.status(404).json({ message: "Not found" });
  await task.update({ status: "done" });
  res.json(task);
});

module.exports = router;
