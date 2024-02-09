const { Schema, model } = require("mongoose");
const { boolean } = require("webidl-conversions");
const { ObjectId } = Schema.Types;
const userSchema = new Schema({
  name: { type: ObjectId, required: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean, required: true, default: "user" },
  roles: { type: String, enum: ["admin", "user"], default: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  uodatedAt: { type: Date, default: Date.now },
});
module.exports = Router;
