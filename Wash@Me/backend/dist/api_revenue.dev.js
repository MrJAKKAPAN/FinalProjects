"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require("express");

var router = express.Router();

var revenue = require("./models/revenue");

var Sequelize = require("sequelize");

var constants = require("./constant");

var formidable = require("formidable");

var path = require("path");

var fs = require("fs-extra");

var Op = Sequelize.Op; // Get revenue

router.get("/revenue", function _callee(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(revenue.findAll({
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
}); // Get revenue ById

router.get("/revenue/:id", function _callee2(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(revenue.findOne({
            where: {
              id: req.params.id
            }
          }));

        case 2:
          result = _context2.sent;

          if (result) {
            res.json(result);
          } else {
            res.json({});
          }

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}); // Get revenueByKeyword

router.get("/revenue/keyword/:keyword", function _callee3(req, res) {
  var keyword, result;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          keyword = req.params.keyword;
          _context3.next = 3;
          return regeneratorRuntime.awrap(revenue.findAll({
            where: {
              re_type: _defineProperty({}, Op.like, "%".concat(keyword, "%"))
            } // {[Op.all]:`%${keyword}%`}

          }));

        case 3:
          result = _context3.sent;
          res.json(result);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
}); // Add revenue

router.post("/revenue", function _callee5(req, res) {
  var form;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          try {
            form = new formidable.IncomingForm();
            form.parse(req, function _callee4(error, fields, files) {
              var result;
              return regeneratorRuntime.async(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return regeneratorRuntime.awrap(revenue.create(fields));

                    case 2:
                      result = _context4.sent;
                      res.json({
                        result: constants.kResultOk,
                        message: JSON.stringify(result)
                      });

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              });
            });
          } catch (error) {
            res.json({
              result: constants.kResultNok,
              message: JSON.stringify(error)
            });
          }

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
}); // Update revenue

router.put("/revenue", function _callee6(req, res) {
  var fields;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          fields = req.body;
          _context6.next = 4;
          return regeneratorRuntime.awrap(revenue.update(fields, {
            where: {
              id: fields.id
            }
          }));

        case 4:
          return _context6.abrupt("return", res.json({
            code: 1,
            message: 'This revenue updated',
            result: constants.kResultOk
          }));

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          res.json({
            result: constants.kResultNok,
            message: JSON.stringify(_context6.t0)
          });

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Delete revenue

router["delete"]("/revenue/:id", function _callee7(req, res) {
  var id, result;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;
          _context7.next = 4;
          return regeneratorRuntime.awrap(revenue.findOne({
            where: {
              id: id
            }
          }));

        case 4:
          result = _context7.sent;
          _context7.next = 7;
          return regeneratorRuntime.awrap(revenue.destroy({
            where: {
              id: id
            }
          }));

        case 7:
          result = _context7.sent;
          // ข้อความตอกกลับ
          res.json({
            result: constants.kResultOk,
            message: JSON.stringify(result)
          });
          _context7.next = 14;
          break;

        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](0);
          res.json({
            result: constants.kResultNok,
            message: "Interanl Error"
          });

        case 14:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
module.exports = router;