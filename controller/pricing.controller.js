const pricingModel = require("../model/pricing.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.addPricingController = asyncHandler(async (req, res) => {
  const { planName, features, cost } = req.body;
  const pricing = await pricingModel.create({ planName, features, cost });
  apiResponse(res, 200, "Pricing added successfully", pricing);
});

exports.getPricingController = asyncHandler(async (req, res) => {
  const pricings = await pricingModel
    .find()
    .select(" -createdAt -updatedAt")
    .sort({ createdAt: -1 });
  apiResponse(res, 200, "Pricings fetched successfully", pricings);
});

exports.updatePricingController = asyncHandler(async (req, res) => {
  const { planName, features, cost } = req.body;
  const id = req.params.id;
  const pricing = await pricingModel.findById(id);

  if (!pricing) return apiResponse(res, 404, "Pricing not found");
  if (planName) pricing.planName = planName;
  if (features) pricing.features = features;
  if (cost) pricing.cost = cost;
  await pricing.save();
  apiResponse(res, 200, "Pricing updated successfully", pricing);
});

exports.deletePricingController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const pricing = await pricingModel.findById(id);
  if (!pricing) return apiResponse(res, 404, "Pricing not found");
  await pricing.deleteOne();
  apiResponse(res, 200, "Pricing deleted successfully", pricing);
});