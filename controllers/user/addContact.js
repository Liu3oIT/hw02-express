const User = require("../../models/user");

const addContact = async (req, res, next) => {
  const { user } = req;
  const { id } = req.body;
  user.contacts.push(id);

  await User.findByIdAndUpdate(user.id, user);
  res.status(200).json({ contacts: user.books });
};
module.exports = addContact;
