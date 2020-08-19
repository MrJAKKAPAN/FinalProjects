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

// Get revenue ById
router.get ("/revenue/:id", async (req, res) => {
    let result = await revenue.findOne({where: {id: req.params.id}})
    if(result){
      res.json(result);
    }else{
      res.json( {} );
    }
  })

// Get revenueByKeyword
router.get("/revenue/keyword/:keyword", async(req, res) => {
    const {keyword} = req.params;
    let result = await revenue.findAll({where: {re_type:{[Op.like]: `%${keyword}%`}},
    // {[Op.all]:`%${keyword}%`}
    });
    res.json(result);
  });

  // Add revenue
router.post("/revenue", async (req, res) => {
    try {
        const form = new formidable.IncomingForm();
        form.parse(req, async (error, fields, files) => {
        let result = await revenue.create(fields);
        res.json({
            result: constants.kResultOk,
            message: JSON.stringify(result),
        });
    });
    } catch (error) {
        res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
    }
});

// Update revenue
router.put("/revenue", async (req, res) => {
    try {
      const form = new formidable.IncomingForm();
      form.parse(req, async (error, fields, files) => {
        let result = await revenue.update(fields, { where: { id: fields.id } });
  
        res.json({
          result: constants.kResultOk,
          message: JSON.stringify(result),
        });
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



module.exports = router;
