const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const revenue = sequelize.define(
  "revenue",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    car_number: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    detail: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    price: {
      type: Sequelize.NUMBER,
      allowNull: true,
    },
    member: {
      type: Sequelize.NUMBER,
      allowNull: true,
    },
    total: {
      type: Sequelize.NUMBER,
      allowNull: true,
    },
    quantity: {
      type: Sequelize.NUMBER,
      allowNull: true,
    },
      // id: {
      //   type: Sequelize.NUMBER,
      //   allowNull: true,
      // },
    reference: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    adName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    // options
    updatedAt: false,
  },
);

(async () => {
  await revenue.sync({ force: false });
})();

module.exports = revenue;
