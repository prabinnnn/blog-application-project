const blogModel = require("./blog.model");
const bookmarkModel = require("../bookmarks");
const create = (payload) => {
  return blogModel.create(payload);
};
const getAll = () => {
  return blogModel.findOne();
};
const updateById = () => {};
const getById = () => {};
const removeById = () => {};
const bookmark = (payload) => {
  const { users, blogs } = payload;
  if (!user || !blogs) throw new Error("user and blogs is missing");
  return bookmarkModel.create(payload);
};
