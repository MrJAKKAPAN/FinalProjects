const express = require("express");
const router = express.Router();
const user = require("./models/user");
const Sequelize = require("sequelize");
const constants = require("./constant");
const formidable = require("formidable");
const path = require("path");
const fs = require("fs-extra");
const bcrypt = require("bcryptjs");
const Op = Sequelize.Op;


// Get user
router.get("/user", async (req, res) => {
    let result = await user.findAll({ order: Sequelize.literal("id DESC") });
    res.json(result);
  });
  

router.post("/user", async (req, res) => {
    try {
      // hash password
        req.body.password = bcrypt.hashSync(req.body.password, 8);

        let result = await user.create(req.body);
        res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
    } catch (error) {
        res.json({
            result: constants.kResultNotOk,message: JSON.stringify(error),
        });
        }
    // CheckData
    // console.log(req.body.username);
    // const{username, password} = req.body
    // res.json({result: "Add User", username, password})
    });


// Update user
router.put("/user", async (req, res) => {
    try {
      const form = new formidable.IncomingForm();
      form.parse(req, async (error, fields, files) => {
        let result = await user.update(fields, { where: { id: fields.id } });
  
        res.json({
          result: constants.kResultOk,
          message: JSON.stringify(result),
        });
      });
    } catch (error) {
      res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
    }
  });

// Delete user
router.delete("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let result = await user.findOne({ where: { id: id } });
        result = await user.destroy({ where: { id: id } });
      // ข้อความตอกกลับ
        res.json({ result: constants.kResultOk, message: JSON.stringify(result) });
    } catch (error) {
        res.json({ result: constants.kResultNok, message: "Interanl Error" });
    }
});

// Get user ById
router.get ("/user/:id", async (req, res) => {
  let result = await user.findOne({where: {id: req.params.id}})
  if(result){
    res.json(result);
  }else{
    res.json( {} );
  }
})

// Get userByKeyword
router.get("/user/keyword/:keyword", async(req, res) => {
  const {keyword} = req.params;
  let result = await user.findAll({where: {fname:{[Op.like]: `%${keyword}%`}},
  // {[Op.all]:`%${keyword}%`}
  });
  res.json(result);
});


module.exports = router;