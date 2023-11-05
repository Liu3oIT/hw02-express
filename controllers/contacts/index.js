const addContact = require("./addContact");
const getContactById = require("./getContactById");
const listContacts = require("./listContacts");
const removeContact = require("./removeContact");
const updateContact = require("./updateContact");
const updateFavorite = require("./favorite");
const uploadImage = require("../user/uploadImage");

module.exports = {
  addContact,
  getContactById,
  listContacts,
  removeContact,
  updateContact,
  updateFavorite,
  uploadImage,
};
