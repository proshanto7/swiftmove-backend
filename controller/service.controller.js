const serviceModel = require("../model/service.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.addServiceController = asyncHandler(async (req, res) => {
  const { title, description, price } = req.body;

  const service = await serviceModel.create({ title, description, price });
  apiResponse(res, 200, "Service added successfully", service);
});

exports.getServiceController = asyncHandler(async (req, res) => {
  const services = await serviceModel
    .find()
    .select(" -createdAt -updatedAt")
    .sort({ createdAt: -1 });
  apiResponse(res, 200, "Services fetched successfully", services);
});

exports.updateServiceController = asyncHandler(async (req, res) => {
  const { title, description, price } = req.body;
  const id = req.params.id;
  const service = await serviceModel.findById(id);

  if (!service) return apiResponse(res, 404, "Service not found");
  if (title) service.title = title;
  if (description) service.description = description;
  if (price) service.price = price;
  await service.save();

  apiResponse(res, 200, "Service updated successfully", service);
});

exports.deleteServiceController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const service = await serviceModel.findById(id);
  if (!service) return apiResponse(res, 404, "Service not found");
  await service.deleteOne();
  apiResponse(res, 200, "Service deleted successfully", service);
});
