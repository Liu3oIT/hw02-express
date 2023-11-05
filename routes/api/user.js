const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/user");
const wrapper = require("../../helpers/controllerWrappers");
const auth = require("../../middlewares/authMiddleware");
const controller = require("../../controllers/auth");
const uploadFile = require("../../middlewares/uploadFiles");

router.post("/", wrapper(auth), controllers.addContact);
router.get("/contact", wrapper(auth), controllers.getListContact);
router.get("/current", wrapper(auth), controllers.getInfo);
router.post("/logout", wrapper(auth), controller.logout);
router.patch("/avatar", uploadFile.single("avatar"), controllers.uploadImage);
module.exports = router;
