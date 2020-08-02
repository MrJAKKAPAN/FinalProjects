const express = require("express");
const router = express.Router();

router.get("/customer", (req, res) => {
    res.json({result:'customer'})
});


module.exports = router;
