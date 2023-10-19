const Contacts = require("../../models/contact");
const requestError = require("../../helpers/requestError");
const contactsSchema = require("../../schemas/contacts");
const updateContact = async (req, res, next) => {
  try {
    // const { error } = contactsSchema.validate(req.body);
    // if (error) {
    //   throw requestError(400, error.message);
    // }
    const { id } = req.params;
    const resolve = await Contacts.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
