"use strict";

var Sequelize = require("sequelize");

var sequelize = require("../db_instance");

var service = sequelize.define("service", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  sv_name: {
    type: Sequelize.TEXT,
    allowNull: false // primaryKey: true

  },
  sv_detail: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  sv_member: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  sv_price: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  sv_type: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {// options
});

(function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(service.sync({
            force: false
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
})();

module.exports = service;