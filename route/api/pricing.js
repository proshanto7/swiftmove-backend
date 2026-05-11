const express = require("express");
const {
  addPricingController,
  getPricingController,
  updatePricingController,
  deletePricingController,
} = require("../../controller/pricing.controller");
const router = express.Router();
router.post("/add-pricing", addPricingController);
router.get("/get-pricing", getPricingController);
router.patch("/update-pricing/:id", updatePricingController);
router.delete("/delete-pricing/:id", deletePricingController);

module.exports = router;
