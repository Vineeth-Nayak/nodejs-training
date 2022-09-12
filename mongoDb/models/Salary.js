const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salarySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  month: { type: Number, required: true },
  salaryCredit: { type: Number, required: true },
});

module.exports = mongoose.model("Salary", salarySchema);
