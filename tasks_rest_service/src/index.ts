import express from "express";
import cors from "cors";

import { readJsonFile, writeJsonFile } from "./helper";

interface ITask {
  id: string;
  title: string;
  completed: boolean;
}

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.get("/tarefas", (req, res) => {
  const tasks = readJsonFile<ITask[]>("dados/tasks.json");
  res.send(tasks);
});

app.get("/tarefas/:id", (req, res) => {
  const tasks = readJsonFile<ITask[]>("dados/tasks.json");
  const task = tasks.find((t) => t.id === req.params.id);
  if (task) {
    res.send(task);
  } else {
    res.status(404).send("Tarefa não encontrada");
  }
});

app.post("/tarefas", (req, res) => {
  const newTask: ITask = req.body;
  const tasks = readJsonFile<ITask[]>("dados/tasks.json");
  tasks.push(newTask);
  writeJsonFile<ITask[]>("dados/tasks.json", tasks);
  res.status(201).send(newTask);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
