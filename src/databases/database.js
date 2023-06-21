const { Sequelize } = require("sequelize");

const db = new Sequelize("project_ws", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
});

module.exports = db;
