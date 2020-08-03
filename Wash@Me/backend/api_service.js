const express = require("express");
const router = express.Router();
const service = require("./models/service");
const Sequelize = require("sequelize");
const constants = require("./constant");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");
const Op = Sequelize.Op;

// Get Products
router.get("/service", async (req, res) => {
  let result = await service.findAll({ order: Sequelize.literal("id DESC") });
  res.json(result);
});

// Add Products
router.post("/service", async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      let result = await service.create(fields);
      res.json({
        result: constants.kResultOk,
        message: JSON.stringify(result),
      });
    });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
});

// Update Product
router.put("/service", async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      let result = await service.update(fields, { where: { id: fields.id } });

      res.json({
        result: constants.kResultOk,
        message: JSON.stringify(result),
      });
    });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
});

// Delete Product
router.delete("/service/:id", async (req, res) => {
  // router.delete("/product/:id-:option", (req, res) =>{
  // res.json({id: req.params.id, option:req.params.option})
  try {
    const { id } = req.params;
    let result = await service.findOne({ where: { id: id } });
    result = await service.destroy({ where: { id: id } });
    // ข้อความตอกกลับ
    res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: "Interanl Error" });
  }
});

module.exports = router;
