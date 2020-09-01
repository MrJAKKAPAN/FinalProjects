"use strict";

var Sequelize = require("sequelize");

var sequelize = require("../db_instance");

var user = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.TEXT,
    allowNull: false // primaryKey: true

  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  u_fname: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  u_lname: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  u_tel: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  u_cardNumber: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  u_email: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  u_address: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  u_status: {
    type: Sequelize.NUMBER,
    allowNull: false
  }
}, {//options
});

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(user.sync({
            force: false
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
})();

module.exports = user;