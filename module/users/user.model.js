const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const userSchema = new Schema({
  name: { type: ObjectId, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  uodatedAt: { type: Date, default: Date.now },
});
module.exports = Router;
