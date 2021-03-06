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
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    original: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    price: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.NUMBER,
      allowNull: false,
    }
    },
    {
      timestamps: false,
    }
  );


(async () => {
  await product.sync({ force: false });    
})();

  
module.exports = product;