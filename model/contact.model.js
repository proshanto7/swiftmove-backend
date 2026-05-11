const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: { type: String, required: [true, "Email is required"], trim: true },
    phone: { type: String, required: [true, "Phone number is required"] },
    moveDate: { type: Date },
    movingFrom: { type: String },
    movingTo: { type: String },
    homeSize: { type: String },
    additionalServices: [{ type: String }],
    additionalDetails: { type: String },
  },
  { timestamps: true, versionKey: false },
);

module.exports = mongoose.model("Contact", contactSchema);
