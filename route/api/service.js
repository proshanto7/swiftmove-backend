const express = require("express");
const {
  addServiceController,
  getServiceController,
  updateServiceController,
  deleteServiceController,
} = require("../../controller/service.controller");
const router = express.Router();
router.post("/add-service", addServiceController);
router.get("/get-service", getServiceController);
router.patch("/update-service/:id", updateServiceController);
router.delete("/delete-service/:id", deleteServiceController);

module.exports = router;
