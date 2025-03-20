import { validationResult } from "express-validator";

let task = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
  },
];

async function getTasks(req, res) {
  try {
    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createTask(req, res) {
  try {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const newTask = {
        title: req.body.title,
        description: req.body.description,
      };
      task.push(newTask);
      return res.status(201).json(newTask);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default {
  getTasks: getTasks,
  createTask: createTask,
};
