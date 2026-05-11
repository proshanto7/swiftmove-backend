const express = require("express");
const router = express.Router();
const {
  addTestimonialController,
  getTestimonialController,
  deleteTestimonialController,
  updateTestimonialController,
} = require("../../controller/testimonial.controller");
router.post("/add-testimonial", addTestimonialController);
router.get("/get-testimonial", getTestimonialController);
router.delete("/delete-testimonial/:id", deleteTestimonialController);    
router.patch("/update-testimonial/:id", updateTestimonialController);
module.exports = router;
