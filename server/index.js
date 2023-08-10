const express = require('express');
const cors = require('cors');

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  tasks = tasks.map(task => (task.id === taskId ? updatedTask : task));
  res.json(updatedTask);
});

app.delete('/api/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  tasks = tasks.filter(task => task.id !== taskId);
  res.sendStatus(204);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const tasksRouter = require('./controller');
app.use('/api', tasksRouter);

app.listen(4000, () => console.log("Server running on 4000"));


