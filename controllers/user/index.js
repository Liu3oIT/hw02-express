const wrapper = require("../../helpers/controllerWrappers");
const addContact = require("./addContact");
const getListContact = require("./getListContact");
const getInfo = require("./getInfo");

module.exports = {
  addContact: wrapper(addContact),
  getListContact: wrapper(getListContact),
  getInfo: wrapper(getInfo),
};
