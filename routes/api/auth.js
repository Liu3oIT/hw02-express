const express = require("express");
const router = express.Router();
const controller = require("../../controllers/auth");
const wrapper = require('../../helpers/controllerWrappers')


router.post("/reqistration", wrapper(controller.reqistration));
router.post("/login", wrapper(controller.login));

module.exports = router