const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const product = sequelize.define(
  "product",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    // pro_id: {
    //   type: Sequelize.TEXT,
    //   allowNull: false,
    //   // primaryKey: true
    // },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
      // primaryKey: true
    },
    original: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    price: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    number: {
      type: Sequelize.NUMBER,
      allowNull: false,
    }
    },
    {
      // options
    }
  );


(async () => {
  await product.sync({ force: false });    
})();

  
module.exports = product;