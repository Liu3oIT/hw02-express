const Contacts = require("../../models/contact");

const updateFavorite = async (req, res, next) => {
  try {
   
    const { id } = req.params;
    const resolve = await Contacts.findOneAndUpdate({ _id: id }, req.body);
    res.status(200).json(resolve);
  } catch (error) {
    next(error);
  }
};

module.exports = updateFavorite;
