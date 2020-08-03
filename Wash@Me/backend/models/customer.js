const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const customer = sequelize.define(
    "customer",
    {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cus_fname: {
        type: Sequelize.TEXT,
        allowNull: false,
      // primaryKey: true
    },
    cus_lname: {
        type: Sequelize.TEXT,
        allowNull: false,
      // primaryKey: true
    },
    cus_tel: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    cus_car_number: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    cus_band: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    cus_email: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    cus_address: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    },
    {
    // options
    }
);

(async () => {
  await customer.sync({ force: false });
})();

module.exports = customer;
