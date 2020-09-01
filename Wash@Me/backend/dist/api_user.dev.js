"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require("express");

var router = express.Router();

var user = require("./models/user");

var Sequelize = require("sequelize");

var constants = require("./constant");

var formidable = require("formidable");

var path = require("path");

var fs = require("fs-extra");

var bcrypt = require("bcryptjs");

var Op = Sequelize.Op; // Get user

router.get("/user", function _callee(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(user.findAll({
            order: Sequelize.literal("id DESC")
          }));

        case 2:
          result = _context.sent;
          res.json(result);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}); // add user

router.post("/user", function _callee2(req, res) {
  var fields;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          req.body.password = bcrypt.hashSync(req.body.password, 8);
          fields = req.body;
          _context2.next = 5;
          return regeneratorRuntime.awrap(user.create(fields));

        case 5:
          return _context2.abrupt("return", res.json({
            code: 1,
            message: 'This user create',
            result: constants.kResultOk
          }));

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.json({
            result: constants.kResultNok,
            message: JSON.stringify(_context2.t0)
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); // Update user

router.put("/user", function _callee3(req, res) {
  var fields;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          fields = req.body;
          _context3.next = 4;
          return regeneratorRuntime.awrap(user.update(fields, {
            where: {
              id: fields.id
            }
          }));

        case 4:
          return _context3.abrupt("return", res.json({
            code: 1,
            message: "This user updated",
            result: constants.kResultOk
          }));

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.json({
            result: constants.kResultNok,
            message: JSON.stringify(_context3.t0)
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Delete user

router["delete"]("/user/:id", function _callee4(req, res) {
  var id, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(user.findOne({
            where: {
              id: id
            }
          }));

        case 4:
          result = _context4.sent;
          _context4.next = 7;
          return regeneratorRuntime.awrap(user.destroy({
            where: {
              id: id
            }
          }));

        case 7:
          result = _context4.sent;
          // ข้อความตอกกลับ
          res.json({
            result: constants.kResultOk,
            message: JSON.stringify(result)
          });
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          res.json({
            result: constants.kResultNok,
            message: "Interanl Error"
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
}); // Get user ById

router.get("/user/:id", function _callee5(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(user.findOne({
            where: {
              id: req.params.id
            }
          }));

        case 2:
          result = _context5.sent;

          if (result) {
            res.json(result);
          } else {
            res.json({});
          }

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
}); // Get userByKeyword

router.get("/user/keyword/:keyword", function _callee6(req, res) {
  var keyword, result;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          keyword = req.params.keyword;
          _context6.next = 3;
          return regeneratorRuntime.awrap(user.findAll({
            where: {
              u_fname: _defineProperty({}, Op.like, "%".concat(keyword, "%"))
            } // {[Op.all]:`%${keyword}%`}

          }));

        case 3:
          result = _context6.sent;
          res.json(result);

        case 5:
        case "end":
          return _context6.stop();
      }
    }
  });
});
module.exports = router;