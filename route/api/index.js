const express = require("express");
const router = express.Router();
router.use("/service", require("./service"));
router.use("/pricing", require("./pricing"));
router.use("/testimonial", require("./testimonial"));
module.exports = router;
