const testimonialModel = require("../model/testimonial.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.addTestimonialController = asyncHandler(async (req, res) => {
  const { name, message, rating, service } = req.body;
  const testimonial = await testimonialModel.create({
    name,
    message,
    rating,
    service,
  });
  apiResponse(res, 200, "Testimonial added successfully", testimonial);
});

exports.getTestimonialController = asyncHandler(async (req, res) => {
  const testimonials = await testimonialModel
    .find()
    .select(" -createdAt -updatedAt")
    .sort({ createdAt: -1 });
  apiResponse(res, 200, "Testimonials fetched successfully", testimonials);
});
exports.deleteTestimonialController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const testimonial = await testimonialModel.findById(id);
  if (!testimonial) return apiResponse(res, 404, "Testimonial not found");
  await testimonial.deleteOne();
  apiResponse(res, 200, "Testimonial deleted successfully", testimonial);
});
exports.updateTestimonialController = asyncHandler(async (req, res) => {
  const { name, message, rating, service } = req.body;
  const id = req.params.id;
  const testimonial = await testimonialModel.findById(id);

  if (!testimonial) return apiResponse(res, 404, "Testimonial not found");
  if (name) testimonial.name = name;
  if (message) testimonial.message = message;
  if (rating) testimonial.rating = rating;
  if (service) testimonial.service = service;
  await testimonial.save();
  apiResponse(res, 200, "Testimonial updated successfully", testimonial);
});
