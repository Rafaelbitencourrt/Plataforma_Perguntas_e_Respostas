const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs"); //utilizando EJS

app.get("/", (req, res) => {
  var nome = "Rafael Bitencourt";
  var lang = "Javascript";
  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Guia do programador",
    inscritos: 8000,
  });
});

app.listen(PORT, () => {
  console.log("app rodando");
});
