const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const user = sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: Sequelize.TEXT,
      allowNull: false,
      // primaryKey: true
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    fname: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    lname: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    tel: {
      type: Sequelize.TEXT ,
      allowNull: false,
    },
    cardNumber: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    address: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    status: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    level: {
      type: Sequelize.STRING,
      defaultValue: "normal",
    },
  },
  {
    //options
  }
);

(async () => {
  await user.sync({ force: false });
})();

module.exports = user;
