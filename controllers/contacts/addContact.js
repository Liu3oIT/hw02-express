const requestError = require("../../helpers/requestError");
const contactsSchema = require("../../schemas/contacts");
const Contact = require('../../models/contact')
const addContact = async (req, res, next) => {
  try {
    const { error } = contactsSchema.validate(req.body);
    if (error) {
      throw requestError(400, error.message);
    }
    const resolve = await Contact.create(req.body)

    return res.status(201).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = addContact;
