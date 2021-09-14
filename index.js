const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs"); //utilizando EJS
app.use(express.static("public")); //utilizando arquivos estaticos

app.get("/:nome/:lang", (req, res) => {
  var nome = req.params.nome;
  var lang = req.params.lang;
  var exibirMsg = false;

  var produtos = [
    { nome: "Doritos", preco: 3.14 },
    { nome: "Coca-cola", preco: 4.99 },
    { nome: "Milka", preco: 3.5 },
  ];

  res.render("index", {
    nome: nome,
    lang: lang,
    empresa: "Guia do programador",
    inscritos: 8000,
    msg: exibirMsg,
    produtos: produtos,
  });
});

app.listen(PORT, () => {
  console.log("app rodando");
});
