const express = require("express");
const router = express.Router();
const { User } = require("../../models/index");

router.post("/addUser", async (req, res) => {
  try {
    if (!req.body) return;
    const { name, dateOfBirth, email, password, age, address } = req.body;
    const user = new User({ name, dateOfBirth, email, password, age, address });
    const result = await user.save();

    if (result) {
      res.send(result);
    } else {
      res.send("Something went wrong ");
    }
  } catch (error) {
    console.log(error.name);
    res.send("Error occured").status(500);
  }
});

router.post("/update", async (req, res) => {
  try {
    if (!req.body) return;
    // const _id = "631edf4bf4a2972bbde5c038";
    const { _id, name, email, password, age } = req.body;
    // console.log(name, email, password, age);

    if ((name == "") | (email == "") | (password == "") | (age == ""))
      res.send("Don't send empty values");

    const result = await User.findByIdAndUpdate(
      { _id },
      { name, email, password, age }
    );

    res.send(result);
  } catch (error) {
    console.log("error", error.name);
    res.send("error occured").status(500);
  }
});

module.exports = router;
