const express = require("express");
const router = express.Router();
router.get("/add-service", (req, res) => {
  res.send("Service");
});
module.exports = router;