const Sequelize = require("sequelize");
const db = require("../db");

const City = db.define("city", {
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  countryName: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.TEXT
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true // Automatically gets converted to SERIAL for postgres
  }
});

module.exports = City;
