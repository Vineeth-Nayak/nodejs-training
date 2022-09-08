const mongoose = require("mongoose");
const User = require("./User");

mongoose.connect("mongodb://localhost/task1");

run();

async function run() {
  try {
    const user = new User({
      name: "Vin",
      dateOfBirth: "12/01/2001",
      email: "vin@gmail.com",
      password: "123123123",
      address: [
        "asdasd asdasd asdasd",
        "asdasd asdasd asdasd",
        "asdasd asdasd asdasd",
        "asdasd asdasd asdasd",
        // "asdasd asdasd asdasd",
      ],
    });
    user.save((err, docs) => {
      console.log(docs);
      addAddress(docs._id);
    });
  } catch (error) {
    console.log("Error has occured");
  }
}

async function addAddress(_id) {
  try {
    console.log(_id);
    User.updateOne(
      { _id, $expr: { $lt: [{ $size: "$address" }, 5] } },

      { $push: { address: "address hello" } },
      (err, docs) => {
        console.log("DOcs maccha", docs);
      }
    );
  } catch (error) {
    console.log("Error has occured from addAddress", error);
  }
}
