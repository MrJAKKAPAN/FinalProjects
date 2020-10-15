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
    
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    // type: 'TIMESTAMP',
    // defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    // allowNull: false
  },
    },
    {
// options

timestamps: false
    // updatedAt: false,
    // createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE,
    //     defaultValue: Sequelize.fn('NOW'),
    //   }
    }
);
(async () => {
    await expenditure.sync({ force: false });    
  })();

module.exports = expenditure;