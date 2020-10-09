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
    // มันไม่มี ฟิล อยู๋แล้วมันจะ updatอันบนพี่ e ยังไง  ?
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
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [ "2019-12-31 19:30:00.000 +00:00", "2020-01-30 19:30:00.000 +00:00"]},}});
        res.json(result);
  // res.json(result);
  console.log("January");
});

// February
router.get("/February", async (req, res) => {
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [ "2019-01-31 19:30:00.000 +00:00", "2020-02-28 19:30:00.000 +00:00"]}}});
        res.json(result);
  // console.log(result);
});

// March
router.get("/March", async (req, res) => {
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: ["2020-02-29 17:00:00.000 +00:00", "2020-03-30 17:00:00.000 +00:00"]} },    
  });
  res.json(result);
  // console.log(result);
});

// April
router.get("/April", async (req, res) => {
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: ["2020-03-31 19:30:00.000 +00:00", "2020-04-29 19:30:00.000 +00:00"]} },    
  });
  res.json(result);
  // console.log(result);
});

// May
router.get("/May", async (req, res) => {
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: [ "2020-04-30 19:30:00.000 +00:00", "2020-05-30 19:30:00.000 +00:00"]} },    
  });
  res.json(result);
  // console.log(result);
});

// June
router.get("/June", async (req, res) => {
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: ["2020-05-31 19:30:00.000 +00:00", "2020-06-29 19:30:00.000 +00:00"]} },    
  });
  res.json(result);
  // console.log(result);
});

// July
router.get("/July", async (req, res) => {
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: ["2020-06-30 19:30:00.000 +00:00", "2020-07-30 19:30:00.000 +00:00"]} },    
  });
  res.json(result);
  // console.log(result);
});

// August
router.get("/August", async (req, res) => {
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: ["2020-07-31 19:30:00.000 +00:00", "2020-08-30 19:30:00.000 +00:00"]} },    
  });
  res.json(result);
  // console.log(result);
});

// September
router.get("/September", async (req, res) => {
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: ["2020-08-31 19:30:00.000 +00:00", "2020-09-29 19:30:00.000 +00:00"]}},    
  });
  res.json(result);
  // console.log(result);
});

// October
router.get("/October", async (req, res) => {
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: ["2020-09-30 19:30:00.000 +00:00", "2020-10-30 19:30:00.000 +00:00"]} },    
  });
  res.json(result);
  // console.log(result);
});

// November
router.get("/November", async (req, res) => {
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: ["2020-10-31 19:30:00.000 +00:00", "2020-11-29 19:30:00.000 +00:00"]} },    
  });
  res.json(result);
  // console.log(result);
});

// December
router.get("/December", async (req, res) => {
  let result = await revenue.findAll({
    where: { 
      createdAt: { 
        [Op.between]: ["2020-11-30 19:30:00.000 +00:00", "2020-12-30 19:30:00.000 +00:00"]} },    
  });
  res.json(result);
  console.log("December");
});

module.exports = router;
