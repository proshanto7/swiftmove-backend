const contactModel = require("../model/contact.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

exports.addContactController = asyncHandler(async (req, res) => {
  const {
    fullName,
    email,
    phone,
    moveDate,
    movingFrom,
    movingTo,
    homeSize,
    additionalServices,
    additionalDetails,
  } = req.body;
  const contact = await contactModel.create({
    fullName,
    email,
    phone,
    moveDate,
    movingFrom,
    movingTo,
    homeSize,
    additionalServices,
    additionalDetails,
  });
  apiResponse(res, 200, "Contact added successfully", contact);
});

exports.getContactController = asyncHandler(async (req, res) => {
  const contacts = await contactModel
    .find()
    .select(" -createdAt -updatedAt")
    .sort({ createdAt: -1 });
  apiResponse(res, 200, "Contacts fetched successfully", contacts);
});
exports.deleteContactController = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const contact = await contactModel.findById(id);
  if (!contact) return apiResponse(res, 404, "Contact not found");
  await contact.deleteOne();
  apiResponse(res, 200, "Contact deleted successfully", contact);
});
exports.updateContactController = asyncHandler(async (req, res) => {
  const {
    fullName,
    email,
    phone,
    moveDate,
    movingFrom,
    movingTo,
    homeSize,
    additionalServices,
    additionalDetails,
  } = req.body;
  const id = req.params.id;
  const contact = await contactModel.findById(id);

  if (!contact) return apiResponse(res, 404, "Contact not found");
  if (fullName) contact.fullName = fullName;
  if (email) contact.email = email;
  if (phone) contact.phone = phone;
  if (moveDate) contact.moveDate = moveDate;
  if (movingFrom) contact.movingFrom = movingFrom;
  if (movingTo) contact.movingTo = movingTo;
  if (homeSize) contact.homeSize = homeSize;
  if (additionalServices) contact.additionalServices = additionalServices;
  if (additionalDetails) contact.additionalDetails = additionalDetails;
  await contact.save();
  apiResponse(res, 200, "Contact updated successfully", contact);
});
