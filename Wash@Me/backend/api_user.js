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

// add user
router.post("/user", async (req, res) => {
    try {
      req.body.password = bcrypt.hashSync(req.body.password, 8);
      const fields = req.body;
      await user.create(fields);
      return res.json({
        code: 1,
        message: 'This user create',
        result: constants.kResultOk,
      });
    } catch (error) {
      res.json({ result: constants.kResultNok, message: JSON.stringify(error) });
    }
});


// Update user
router.put("/user", async (req, res) => {
  try {
    const fields = req.body;
    await user.update(fields, {
      where: { id: fields.id },
    });
    return res.json({
      code: 1,
      message: "This user updated",
      result: constants.kResultOk,
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
router.get("/user/:id", async (req, res) => {
  let result = await user.findOne({ where: { id: req.params.id } });
  if (result) {
    res.json(result);
  } else {
    res.json({});
  }
});

// Get userByKeyword
router.get("/user/keyword/:keyword", async (req, res) => {
  const { keyword } = req.params;
  let result = await user.findAll({
    where: { u_fname: { [Op.like]: `%${keyword}%` } },
    // {[Op.all]:`%${keyword}%`}
  });
  res.json(result);
});

module.exports = router;
