const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema(
  {
    planName: {
      type: String,
      required: [true, "Plan name is required"],
      unique: [true, "Plan name already exists"],
      trim: true,
    },
    features: [{ type: String }], // Array of features
    cost: { type: Number, required: [true, "Cost is required"] },
  },
  { timestamps: true, versionKey: false },
);

module.exports = mongoose.model("Pricing", pricingSchema);
