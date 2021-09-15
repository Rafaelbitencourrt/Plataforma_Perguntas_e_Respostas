const Sequelize = require("sequelize");

const connection = new Sequelize("guiaperguntas", "root", "28461973", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
