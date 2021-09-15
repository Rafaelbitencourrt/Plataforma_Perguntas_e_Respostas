const express = require("express");
const app = express();
const PORT = 3000;

//EJS E ARQUIVOS ESTATICOS
app.set("view engine", "ejs");
app.use(express.static("public"));

//bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROTAS
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  res.send(
    "Formulário enviado!! Titulo:" + titulo + " " + "Descricao:" + descricao
  );
});

app.listen(PORT, () => {
  console.log("app rodando");
});
