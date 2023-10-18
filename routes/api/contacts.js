const express = require("express");
const router = express.Router();
const contactsController = require('../../controllers/contacts')

router.get("/", contactsController.listContacts);

router.get("/:id",contactsController.getContactById);

router.post("/", contactsController.addContact);

router.delete("/:id", contactsController.removeContact);

router.put("/:id", contactsController.updateContact);

router.patch("/:id", contactsController.updateFavorite);

module.exports = router;
