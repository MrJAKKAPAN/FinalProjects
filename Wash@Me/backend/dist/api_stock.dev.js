"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require("express");

var router = express.Router();

var product = require("./models/product");

var Sequelize = require("sequelize");

var constants = require("./constant");

var formidable = require("formidable");

var path = require("path");

var fs = require("fs-extra");

var Op = Sequelize.Op; // Get Products

router.get("/product", function _callee(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(product.findAll({
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
}); // Add Products

router.post("/product", function _callee2(req, res) {
  var fields;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          fields = req.body;
          _context2.next = 4;
          return regeneratorRuntime.awrap(product.create(fields));

        case 4:
          return _context2.abrupt("return", res.json({
            code: 1,
            message: 'This product create',
            result: constants.kResultOk
          }));

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.json({
            result: constants.kResultNok,
            message: JSON.stringify(_context2.t0)
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Update Product

router.put("/product", function _callee3(req, res) {
  var fields;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          fields = req.body;
          _context3.next = 4;
          return regeneratorRuntime.awrap(product.update(fields, {
            where: {
              id: fields.id
            }
          }));

        case 4:
          return _context3.abrupt("return", res.json({
            code: 1,
            message: 'This product updated',
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
}); // Delete Product

router["delete"]("/product/:id", function _callee4(req, res) {
  var id, result;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(product.findOne({
            where: {
              id: id
            }
          }));

        case 4:
          result = _context4.sent;
          _context4.next = 7;
          return regeneratorRuntime.awrap(product.destroy({
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
}); // Get service ById

router.get("/product/:id", function _callee5(req, res) {
  var result;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(product.findOne({
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
}); // Get Product By keyword 

router.get("/product/keyword/:keyword", function _callee6(req, res) {
  var keyword, result;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          keyword = req.params.keyword;
          _context6.next = 3;
          return regeneratorRuntime.awrap(product.findAll({
            where: {
              pro_name: _defineProperty({}, Op.like, "%".concat(keyword, "%"))
            }
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