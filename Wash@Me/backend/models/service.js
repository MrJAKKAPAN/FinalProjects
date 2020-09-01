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
    sv_name: {
      type: Sequelize.TEXT,
      allowNull: false,
      // primaryKey: true
    },
    sv_detail: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    sv_member: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    sv_price: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    sv_type: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    },
    {
      // options
    }
  );


(async () => {
  await service.sync({ force: false });    
})();

  
module.exports = service;