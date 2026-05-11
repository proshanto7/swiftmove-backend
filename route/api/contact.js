const express = require("express");
const { addContactController, getContactController, deleteContactController, updateContactController } = require("../../controller/contact.controller");
const router = express.Router();

router.post("/add-contact", addContactController);
router.get("/get-contact", getContactController);
router.delete("/delete-contact/:id", deleteContactController);
router.patch("/update-contact/:id", updateContactController);

module.exports = router;