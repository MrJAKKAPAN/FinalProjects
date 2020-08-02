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
      type: Sequelize.STRING,
      allowNull: false,
      // primaryKey: true
    },
    password: {
      type: Sequelize.STRING,
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
      type: Sequelize.FLOAT(10) ,
      allowNull: false,
    },
    cardNumber: {
      type: Sequelize.FLOAT(13) ,
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
      type: Sequelize.STRING,
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

module.exports = user;
