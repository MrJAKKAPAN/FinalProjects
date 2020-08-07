const express = require("express");
const router = express.Router();
const product = require("./models/product");
const Sequelize = require("sequelize");
const constants = require("./constant");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");
const Op = Sequelize.Op;

// Get Products
router.get("/product", async (req, res) => {
  let result = await product.findAll({ order: Sequelize.literal("id DESC") });
  res.json(result);
});

// Add Products
router.post("/product", async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      let result = await product.create(fields);
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
router.put("/product", async (req, res) => {
  try {
    const form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      let result = await product.update(fields, { where: { id: fields.id } });
      // result = await uploadImage(files, fields);

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
router.delete("/product/:id", async (req, res) => {
  // router.delete("/product/:id-:option", (req, res) =>{
  // res.json({id: req.params.id, option:req.params.option})
  try {
    const { id } = req.params;
    let result = await product.findOne({ where: { id: id } });
    result = await product.destroy({ where: { id: id } });
    // ข้อความตอกกลับ
    res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
  } catch (error) {
    res.json({ result: constants.kResultNok, message: "Interanl Error" });
  }
});

// Get service ById
router.get ("/product/:id", async (req, res) => {
  let result = await product.findOne({where: {id: req.params.id}})
  if(result){
    res.json(result);
  }else{
    res.json( {} );
  }
})

// Get Product By keyword 
router.get("/product/keyword/:keyword", async (req, res) => {
  const { keyword } = req.params;
  let result = await product.findAll({ where: { pro_name: {[Op.like]: `%${keyword}%`} }  });
  res.json(result);
});

module.exports = router;
