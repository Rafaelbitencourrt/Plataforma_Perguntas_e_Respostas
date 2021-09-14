const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Bem vindo ao meu site");
});

app.listen(PORT, () => {
  console.log("app rodando");
});
