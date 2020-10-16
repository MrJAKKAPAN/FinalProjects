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
  router.get("/expenditures", async (req, res) => {
    let result = await expenditure.findAll({limit:5, order: Sequelize.literal("id DESC") });
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



  // Month CreatedAt
// January
router.get("/January", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [ `${YYYY}-01-01 19:30:00.000 +00:00`, `${YYYY}-01-31 19:30:00.000 +00:00`]},}});
        res.json(result);
  // res.json(result);
  console.log("January");
});

// February
router.get("/February", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [ `${YYYY}-02-01 19:30:00.000 +00:00`, `${YYYY}-02-29 19:30:00.000 +00:00`]}}});
        res.json(result);
  // console.log(result);
});

// March
router.get("/March", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-03-01 17:00:00.000 +00:00`, `${YYYY}-03-31 17:00:00.000 +00:00`]} },    
  });
  res.json(result);
  // console.log(result);
});

// April
router.get("/April", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-04-01 19:30:00.000 +00:00`, `${YYYY}-04-30 19:30:00.000 +00:00`]} },    
  });
  res.json(result);
  // console.log(result);
});

// May
router.get("/May", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [ `${YYYY}-05-01 19:30:00.000 +00:00`, `${YYYY}-05-31 19:30:00.000 +00:00`]} },    
  });
  res.json(result);
  // console.log(result);
});

// June
router.get("/June", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-06-01 19:30:00.000 +00:00`, `${YYYY}-06-30 19:30:00.000 +00:00`]} },    
  });
  res.json(result);
  // console.log(result);
});

// July
router.get("/July", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-07-01 19:30:00.000 +00:00`, `${YYYY}-07-31 19:30:00.000 +00:00`]} },    
  });
  res.json(result);
  // console.log(result);
});

// August
router.get("/August", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-08-01 19:30:00.000 +00:00`, `${YYYY}-08-31 19:30:00.000 +00:00`]} },    
  });
  res.json(result);
  // console.log(result);
});

// September
router.get("/September", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-09-01 19:30:00.000 +00:00`, `${YYYY}-09-30 19:30:00.000 +00:00`]}},    
  });
  res.json(result);
  // console.log(result);
});

// October
router.get("/October", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-10-01 19:30:00.000 +00:00`, `${YYYY}-10-31 19:30:00.000 +00:00`]} },    
  });
  res.json(result);
  // console.log(result);
});

// November
router.get("/November", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-11-01 19:30:00.000 +00:00`, `${YYYY}-11-30 19:30:00.000 +00:00`]} },    
  });
  res.json(result);
  // console.log(result);
});

// December
router.get("/December", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await expenditure.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-12-01 19:30:00.000 +00:00`, `${YYYY}-12-31 19:30:00.000 +00:00`]} },    
  });
  res.json(result);
  console.log("December");
});

  module.exports = router;