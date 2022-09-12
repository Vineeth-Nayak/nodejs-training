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
      res.send("User Added");
    } else {
      res.send("Something went wrong ");
    }
  } catch (error) {
    console.log(error.name);
  }
});

module.exports = router;
