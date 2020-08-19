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
    re_type: {
        type: Sequelize.NUMBER,
        allowNull: false,
      // primaryKey: true
    },
    re_detail: {
        type: Sequelize.TEXT,
        allowNull: false,
      // primaryKey: true
    },
    re_pro_name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    re_cus_name: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    re_reference: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    re_price: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    re_number: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    re_unit: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
    ad_id: {
        type:Sequelize.TEXT,
        allowNull: false,
    }

    },
    {
    // options
    }
);

(async () => {
  await revenue.sync({ force: false });
})();

module.exports = revenue;
