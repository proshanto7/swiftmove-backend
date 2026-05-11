const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      unique: [true, "Title already exists"],
      trim: true,
    },
    description: { type: String },
    price: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("Service", serviceSchema);
