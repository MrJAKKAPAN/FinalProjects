const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const revenue = sequelize.define(
  "revenue",
  {
    re_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    car_number: {
      type: Sequelize.TEXT,
    },
    type: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    detail: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    name: {
      type: Sequelize.TEXT,
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
      type: Sequelize.TEXT,
      allowNull: true,
    },
    id: {
      type: Sequelize.NUMBER,
      allowNull: true,
    },
    reference: {
      type: Sequelize.NUMBER,
      allowNull: true,
    },
    ad_name: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
  },
  {
    // options
  },
);

(async () => {
  await revenue.sync({ force: false });
})();

module.exports = revenue;
