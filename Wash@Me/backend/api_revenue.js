const express = require("express");
const router = express.Router();

router.get("/revenue", (req, res) => {
    res.json({result:'revenue'})
});


module.exports = router;
