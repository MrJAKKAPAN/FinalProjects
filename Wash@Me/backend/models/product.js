const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const product = sequelize.define(
  "product",
  {
    pro_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    pro_name: {
      type: Sequelize.TEXT,
      allowNull: false,
      // primaryKey: true
    },
    pro_price_original: {
      type: Sequelize.Float,
      allowNull: false,
    },
    pro_price: {
      type: Sequelize.Float,
      allowNull: false,
    },
    pro_number: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    
    // level: {
    //   type: Sequelize.STRING,
    //   defaultValue: "normal",
    // },
  },
  {
    //options
  }
);

(async () => {
  await user.sync({ force: false });
})();

module.exports = product;
