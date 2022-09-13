const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, default: Date.now(), required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minLength: 8 },
  age: { type: Number, required: true },
  // address: [
  //   {
  //     type: String,
  //     required: true,
  //     validate: {
  //       validator: function () {
  //         return !(this.address.length > 5);
  //       },
  //       message: (props) => `${props.value} exceeds maximum array size (5)!`,
  //     },
  //   },
  // ],
  addresses: [
    {
      address: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
