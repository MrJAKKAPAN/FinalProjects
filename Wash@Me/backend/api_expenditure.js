const express = require("express");
const router = express.Router();
const expenditure = require("./models/expenditure");
const Sequelize = require("sequelize");
const constants = require("./constant");
const fs = require("fs-extra");
const Op = Sequelize.Op;

// Get expenditure
router.get("/expenditure", async (req, res) => {
    let result = await expenditure.findAll({ order: Sequelize.literal("id DESC") });
    res.json(result);
    // res.json('result ok');
  });
  
  // Add expenditure
  router.post("/expenditure", async (req, res) => {
    //   res.json('Add in function ok');
    try {
        const fields = req.body;
        await expenditure.create(fields);
        return res.json({
          code: 1,
          message: 'This expenditure create',
          result: constants.kResultOk,
        });
      } catch (error) {
        res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
      }
    });
  
  // Update expenditures
  router.put("/expenditure", async (req, res) => {
    try {
      const fields = req.body;
      await expenditure.update(fields, {
        where: { id: fields.id },
      });
      return res.json({
        code: 1,
        message: 'This expenditure updated',
        result: constants.kResultOk,
      });
    } catch (error) {
      res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
    }
  });
  
  // Delete expenditure
  router.delete("/expenditure/:id", async (req, res) => {
    try {
      const { id } = req.params;
      let result = await expenditure.findOne({ where: { id: id } });
      result = await expenditure.destroy({ where: { id: id } });
      // ข้อความตอกกลับ
      res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
    } catch (error) {
      res.json({ result: constants.kResultNok, message: "Interanl Error" });
    }
  });
  
  // Get expenditure ById
  router.get("/expenditure/:id", async (req, res) => {
    let result = await expenditure.findOne({ where: { id: req.params.id } });
    if (result) {
      res.json(result);
    } else {
      res.json({});
    }
  });
  
  // Get expenditureByKeyword
  router.get("/expenditure/keyword/:keyword", async (req, res) => {
    const { keyword } = req.params;
    let result = await expenditure.findAll({
      where: { ex_name: { [Op.like]: `%${keyword}%` } },
      // {[Op.all]:`%${keyword}%`}
    });
    res.json(result);
  });


  module.exports = router;