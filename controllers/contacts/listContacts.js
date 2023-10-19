const Contact = require("../../models/contact");
const listContacts = async (req, res, next) => {
  try {
    const resolve = await Contact.find()
    return res.status(200).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = listContacts;
