const express = require("express");
const router = express.Router();

router.get("/service", (req, res) => {
    res.json({result:'service'})
});


module.exports = router;