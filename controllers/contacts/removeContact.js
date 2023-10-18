const Contact = require("../../models/contact");
const requestError = require("../../helpers/requestError");

const removeContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resolve = await Contact.findOneAndRemove({ _id: id });
    if (!resolve) {
      throw requestError(400);
    }
    return res.status(204).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = removeContact;
