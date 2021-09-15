const express = require("express");
const app = express();
const PORT = 3000;
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");

//DATABASE

connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

//EJS E ARQUIVOS ESTATICOS
app.set("view engine", "ejs");
app.use(express.static("public"));

//BODYPARSER
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROTAS
app.get("/", (req, res) => {
  Pergunta.findAll({ raw: true }).then((perguntas) => {
    res.render("index", {
      perguntas: perguntas,
    });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;

  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log("app rodando");
});
