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
    pro_id: {
      type: Sequelize.NUMBER,
      allowNull: false,
      // primaryKey: true
    },
    pro_name: {
      type: Sequelize.TEXT,
      allowNull: false,
      // primaryKey: true
    },
    pro_original: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    pro_price: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    pro_number: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    
  
  },
  {
    //options
  }
);

(async () => {
  await user.sync({ force: false });
})();

module.exports = product;