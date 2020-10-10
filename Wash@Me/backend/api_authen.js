const express = require("express");
const router = express.Router();
const user = require("./models/user");
const bcrypt = require("bcryptjs");
const constants = require("./constant");


router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    let result =  await user.findOne({ where: { username: username } });
    if (result != null) {
      if (bcrypt.compareSync(password, result.password)) {
        res.json({
          result: constants.kResultOk,
          data: result
        });
      } else {
        res.json({ result: constants.kResultNok, message: " password ไม่ถูกต้อง" });
      }
    } else {
      res.json({ result: constants.kResultNok, message: "username ไม่ถูกต้อง" });
    }
});

module.exports = router;
