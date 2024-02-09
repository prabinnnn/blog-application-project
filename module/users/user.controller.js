const userModel = require("./user.model");
const { hashPassword, comparePassword } = require("../../utils/bycripts");
const { error } = require("console");
const register = (payload) => {
  payload.password = hashPassword(payload.password);
  return userModel.create(payload);
};
const login = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) throw new Error("name and email is missing");
  const user = await userModel.findOne({ email });
  if (!user) throw new Error("user doesnt exit");
  const { password: hashPw } = user;
  const result = comparePassword(password, hashPw);
  if (!result) throw new error("email or password mismatch try again");
  return result;
};
const getById = () => {};
const updateById = () => {};
const forgetPassword = () => {};
const restPassword = () => {};
const changePassword = () => {};
module.exports = {
  register,
  login,
  getById,
  updateById,
  forgetPassword,
  restPassword,
  changePassword,
};
