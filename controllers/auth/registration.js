const User = require("../../models/user");
const requestError = require("../../helpers/requestError");
const bcrypt = require("bcrypt");
const registration = async (req, res, next) => {
  try {
    const { password, email } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return requestError(409, "Email already in use");
  }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashPassword,
    });
    res.status(201).json({
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
      },
    });
  } catch (error) {
    error = requestError(409);
    throw error;
  }
};
module.exports = registration;
