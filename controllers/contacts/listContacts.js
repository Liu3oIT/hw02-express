const Contact = require("../../models/contact");
const listContacts = async (req, res, next) => {
  try {
   const { _id: owner } = req.user;
   console.log(owner);
    const resolve = await Contact.find({owner});
    return res.status(200).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = listContacts;
