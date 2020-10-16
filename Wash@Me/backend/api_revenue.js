const express = require("express");
const router = express.Router();
const revenue = require("./models/revenue");
const Sequelize = require("sequelize");
const constants = require("./constant");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");
const Op = Sequelize.Op;


// Get revenue
router.get("/revenue", async (req, res) => {
  let result = await revenue.findAll({ order: Sequelize.literal("id DESC") });
  res.json(result);
});
// Get revenue
router.get("/revenuelimit", async (req, res) => {
  let result = await revenue.findAll({ limit: 5 , order: Sequelize.literal("id DESC") });
  res.json(result);
  console.log(result)
});

// Get revenue ById
router.get("/revenue/:id", async (req, res) => {
  let result = await revenue.findOne({ where: { id: req.params.id } });
  if (result) {
    res.json(result);
  } else {
    res.json({});
  }
});

// Get revenueByKeyword
router.get("/revenue/keyword/:keyword", async (req, res) => {
  const { keyword } = req.params;
  let result = await revenue.findAll({where: { car_number: { [Op.like]: `%${keyword}%` } }});
    // {[Op.all]:`%${keyword}%`}
  res.json(result);
});

// Add revenue
router.post("/revenue", async (req, res) => {
  try {
    const fields = req.body;
    const result = await revenue.bulkCreate(fields.addedItems);
    return res.json({
      code: 1,
      message: "This revenue create",
      result
    });
  } catch (error) {
    console.log(error)
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
});

// Update revenue
router.put("/revenue", async (req, res) => {
  try {
    const fields = req.body;
    await revenue.update(fields, {
      where: { id: fields.id },
    });
    return res.json({
      code: 1,
      message: "This revenue updated",
      result: constants.kResultOk,
    });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
  }
});

// Delete revenue
router.delete("/revenue/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let result = await revenue.findOne({ where: { id: id } });
    result = await revenue.destroy({ where: { id: id } });
    // ข้อความตอกกลับ
    res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: "Interanl Error" });
  }
});



// Month CreatedAt
// January
router.get("/January", async (req, res) => {
  // ปีปัจจุบัน
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [ `${YYYY}-01-01 19:30:00.000 +00:00`, `${YYYY}-01-31 19:30:00.000 +00:00`]},}});
        res.json(result);
});

// February
router.get("/February", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [ `${YYYY}-02-01 19:30:00.000 +00:00`, `${YYYY}-02-29 19:30:00.000 +00:00`]}}});
        res.json(result);

});

// March
router.get("/March", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-03-01 17:00:00.000 +00:00`, `${YYYY}-03-31 17:00:00.000 +00:00`]} },    
  });
  res.json(result);

});

// April
router.get("/April", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-04-01 19:30:00.000 +00:00`, `${YYYY}-04-30 19:30:00.000 +00:00`]} },    
  });
  res.json(result);

});

// May
router.get("/May", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [ `${YYYY}-05-01 19:30:00.000 +00:00`, `${YYYY}-05-31 19:30:00.000 +00:00`]} },    
  });
  res.json(result);

});

// June
router.get("/June", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-06-01 19:30:00.000 +00:00`, `${YYYY}-06-30 19:30:00.000 +00:00`]} },    
  });
  res.json(result);

});

// July
router.get("/July", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-07-01 19:30:00.000 +00:00`, `${YYYY}-07-31 19:30:00.000 +00:00`]} },    
  });
  res.json(result);

});

// August
router.get("/August", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-08-01 19:30:00.000 +00:00`, `${YYYY}-08-31 19:30:00.000 +00:00`]} },    
  });
  res.json(result);

});

// September
router.get("/September", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-09-01 19:30:00.000 +00:00`, `${YYYY}-09-30 19:30:00.000 +00:00`]}},    
  });
  res.json(result);

});

// October
router.get("/October", async (req, res) => {
  // ปีปัจจุบัน
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-10-01 19:30:00.000 +00:00`, `${YYYY}-10-31 19:30:00.000 +00:00`]} },    
  });
  res.json(result);

});

// November
router.get("/November", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-11-01 19:30:00.000 +00:00`, `${YYYY}-11-30 19:30:00.000 +00:00`]} },    
  });
  res.json(result);

});

// December
router.get("/December", async (req, res) => {
  let YYYY = new Date().getFullYear();
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [`${YYYY}-12-01 19:30:00.000 +00:00`, `${YYYY}-12-31 19:30:00.000 +00:00`]} },    
  });
  res.json(result);
  console.log("December");
});

module.exports = router;
