const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const service = sequelize.define(
  "service",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      // primaryKey: true
    },
    detail: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    member: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    price: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
    {
      timestamps: false,
      // options
    }
  );


(async () => {
  await service.sync({ force: false });    
})();

  
module.exports = service;