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
        type: Sequelize.STRING,
        allowNull: false,
    },
    cus_lname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cus_tel: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    cus_car_number: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cus_band: {
        type: Sequelize.STRING,
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
        timestamps: false,
    }
);

(async () => {
  await customer.sync({ force: false });
})();

module.exports = customer;
