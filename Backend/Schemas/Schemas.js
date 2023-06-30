const { Schema } = require("mongoose");
const { mongoose } = require("../Db/Db");

const studentSchema = new mongoose.Schema({
  name: { type: Schema.Types.String, required: true },
  rollNumber: {
    type: Schema.Types.Number,
    min: 111,
    max: 999,
    unique: true,
    required: true,
  },
  fees: { type: Schema.Types.String, default: "unpaid" },
  updated: { type: Schema.Types.Date, default: Date.now },
  _id: Schema.Types.UUID,
});

const Student = mongoose.model("Students", studentSchema);
module.exports = { Student };
// const newuser = new Users({ name: "Rahul", age: 10, isActive: true });
// console.log(newuser);
