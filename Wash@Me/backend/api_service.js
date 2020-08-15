const express = require("express");
const router = express.Router();
const service = require("./models/service");
const Sequelize = require("sequelize");
const constants = require("./constant");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");
const Op = Sequelize.Op;

// Get service
router.get("/service", async (req, res) => {
  let result = await service.findAll({ order: Sequelize.literal("id DESC") });
  res.json(result);
});

// Add service
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

// Update service
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

// Delete service
router.delete("/service/:id", async (req, res) => {
  // router.delete("/service/:id-:option", (req, res) =>{
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

// Get service ById
router.get ("/service/:id", async (req, res) => {
  let result = await service.findOne({where: {id: req.params.id}})
  if(result){
    res.json(result);
  }else{
    res.json( {} );
  }
})

// Get serviceByKeyword
router.get("/service/keyword/:keyword", async(req, res) => {
  const {keyword} = req.params;
  let result = await service.findAll({where: {sv_name:{[Op.like]: `%${keyword}%`} } });
  res.json(result);
});

module.exports = router;
