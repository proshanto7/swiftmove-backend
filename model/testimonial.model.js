const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"], trim: true },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
    },
    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
    },
    rating: { type: Number, min: 1, max: 5 },
  },
  { timestamps: true, versionKey: false },
);

module.exports = mongoose.model("Testimonial", testimonialSchema);
