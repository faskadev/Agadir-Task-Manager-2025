const Task = require('../models/task');


exports.createTask = async (req, res) => {
try {
const task = await Task.create({ ...req.body, user_id: req.user.id });
res.status(201).json(task);
} catch (err) {
res.status(400).json({ error: err.message });
}
};


exports.getTasks = async (req, res) => {
try {
const tasks = await Task.findAll({ where: { user_id: req.user.id } });
res.json(tasks);
} catch (err) {
res.status(400).json({ error: err.message });
}
};


exports.updateTask = async (req, res) => {
try {
await Task.update(req.body, {
where: { id: req.params.id, user_id: req.user.id }
});
res.json({ message: 'Updated' });
} catch (err) {
res.status(400).json({ error: err.message });
}
};


exports.deleteTask = async (req, res) => {
try {
await Task.destroy({ where: { id: req.params.id, user_id: req.user.id } });
res.json({ message: 'Deleted' });
} catch (err) {
res.status(400).json({ error: err.message });
}
};


exports.markDone = async (req, res) => {
try {
await Task.update(
{ status: 'done' },
{ where: { id: req.params.id, user_id: req.user.id } }
);
res.json({ message: 'Task completed' });
} catch (err) {
res.status(400).json({ error: err.message });
}
};