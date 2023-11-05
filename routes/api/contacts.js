const express = require("express");
const router = express.Router();
const contactsController = require("../../controllers/contacts");
const auth = require("../../middlewares/authMiddleware");
const wrapper = require("../../helpers/controllerWrappers");


router.get("/", wrapper(auth), contactsController.listContacts);

router.get("/:id", wrapper(auth), contactsController.getContactById);

router.post("/", wrapper(auth), contactsController.addContact);

router.delete("/:id", wrapper(auth), contactsController.removeContact);

router.put("/:id", wrapper(auth), contactsController.updateContact);

router.patch("/:id", wrapper(auth), contactsController.updateFavorite);

// router.patch(
//   "/:id/image",
//   uploadFile.single("image"),
//   contactsController.uploadImage
// );

module.exports = router;
