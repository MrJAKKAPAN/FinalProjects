const express = require("express");
const router = express.Router();
const customer = require("./models/customer");
const Sequelize = require("sequelize");
const constants = require("./constant");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");
const Op = Sequelize.Op;


// Get Customer
router.get("/customer", async (req, res) => {
    let result = await customer.findAll({ order: Sequelize.literal("id DESC") });
    res.json(result);
  });
  
// Add Customer
router.post("/customer", async (req, res) => {
    try {
        const form = new formidable.IncomingForm();
        form.parse(req, async (error, fields, files) => {
        let result = await customer.create(fields, files);
        res.json({
            result: constants.kResultOk,
            message: JSON.stringify(result),
        });
    });
    } catch (error) {
        res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
    }
});

// Update Customer
router.put("/customer", async (req, res) => {
    try {
      const form = new formidable.IncomingForm();
      form.parse(req, async (error, fields, files) => {
        let result = await customer.update(fields, { where: { id: fields.id } });
  
        res.json({
          result: constants.kResultOk,
          message: JSON.stringify(result),
        });
      });
    } catch (error) {
      res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
    }
  });

// Delete Customer
router.delete("/customer/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let result = await customer.findOne({ where: { id: id } });
        result = await customer.destroy({ where: { id: id } });
      // ข้อความตอกกลับ
        res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
    } catch (error) {
        res.json({ result: constants.kResultNok, message: "Interanl Error" });
    }
});

// Get Customer ById
router.get ("/customer/:id", async (req, res) => {
  let result = await customer.findOne({where: {id: req.params.id}})
  if(result){
    res.json(result);
  }else{
    res.json( {} );
  }
})

// Get CustomerByKeyword
router.get("/customer/keyword/:keyword", async(req, res) => {
  const {keyword} = req.params;
  let result = await customer.findAll({where: {cus_fname:{[Op.like]: `%${keyword}%`}},
  // {[Op.all]:`%${keyword}%`}
  });
  res.json(result);
});


module.exports = router;
