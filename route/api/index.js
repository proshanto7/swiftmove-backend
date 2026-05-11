const express = require("express");
const router = express.Router();
router.use("/service", require("./service"));
router.use("/pricing", require("./pricing"));
module.exports = router;
