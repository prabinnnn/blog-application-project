const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const blogSchema = new Schema({
  title: { type: String, required: true },
  author: { type: ObjectId, required: true, ref: "User" },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = new model("Blog", blogSchema);
