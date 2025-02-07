import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Olá, essa é uma API para a aula 1");
});

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
