const Sequelize = require("sequelize");
const connection = require("./database");

//MODEL
const Pergunta = connection.define("perguntas", {
  //CAMPOS DA TABELA
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Pergunta.sync({ force: false }).then(() => {
  console.log("Tabela criada");
});

module.exports = Pergunta;
