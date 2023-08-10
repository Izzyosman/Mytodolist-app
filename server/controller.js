const express = require("express");

const router = express.Router();

let tasks = [];

router.get('/tasks', (req, res) => {
  res.json(tasks);
});

router.post('/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  tasks = tasks.map(task => (task.id === taskId ? updatedTask : task));
  res.json(updatedTask);
});

router.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter(task => task.id !== taskId);
  res.sendStatus(204);
});

module.exports = router;



