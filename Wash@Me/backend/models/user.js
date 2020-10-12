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
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    u_fname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    u_lname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    u_tel: {
      type: Sequelize.NUMBER ,
      allowNull: false,
    },
    u_cardNumber: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
    u_email: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    u_address: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    u_status: {
      type: Sequelize.NUMBER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

(async () => {
  await user.sync({ force: false });
})();

module.exports = user;
