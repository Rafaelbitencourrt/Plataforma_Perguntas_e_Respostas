const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs"); //utilizando EJS
app.use(express.static("public")); //utilizando arquivos estaticos

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  res.send("Formulário enviado!");
});

app.listen(PORT, () => {
  console.log("app rodando");
});
