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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
