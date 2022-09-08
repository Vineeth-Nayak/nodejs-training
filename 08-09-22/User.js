const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, minLength: 8 },
  address: [
    {
      type: String,
      required: true,
      validate: {
        validator: function () {
          console.log(this.address.length, "asdasdasdasdasdasdsdasd");
          return !(this.address.length > 5);
        },
        message: (props) => `${props.value} exceeds maximum array size (10)!`,
      },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
