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
            type: Sequelize.STRING,
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
        adName: {
            type: Sequelize.STRING,
            allowNull:false,
        },
    },
    {
// options
    updatedAt: false,
    }
);
(async () => {
    await expenditure.sync({ force: false });    
  })();

module.exports = expenditure;