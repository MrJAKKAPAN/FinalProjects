const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const expenditure = sequelize.define(
    "expenditure",
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ex_name: {
            type: Sequelize.TEXT,
            allowNull:false,
        },
        ex_price: {
            type: Sequelize.NUMBER,
            allowNull:false,
        },
        ex_detail: {
            type: Sequelize.TEXT,
            allowNull:false,
        },
        ex_name_member: {
            type: Sequelize.TEXT,
            allowNull:false,
        },
    },
    // options
    {

    }
);
(async () => {
    await expenditure.sync({ force: false });    
  })();

module.exports = expenditure;