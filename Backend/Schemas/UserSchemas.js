const { Schema } = require("mongoose");
const { mongoose } = require("../Db/Db");

const userSchema = new mongoose.Schema({
  name: Schema.Types.String,
  age: { type: Schema.Types.Number, min: 18, max: 65 },
  isActive: Schema.Types.Boolean,
  updated: { type: Schema.Types.Date, default: Date.now },
  _id: Schema.Types.UUID,
});

const Users = mongoose.model("UserItem", userSchema);
module.exports = { Users };
