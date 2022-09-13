const express = require("express");
const router = express.Router();
const { User, Salary } = require("../../models/index");

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

router.put("/update", async (req, res) => {
  try {
    if (!req.body) return;
    // const _id = "631edf4bf4a2972bbde5c038";
    const { _id, name, email, password, age } = req.body;
    // console.log(name, email, password, age);

    if (
      (name == "") |
      (email == "") |
      (password == "") |
      (age == "") |
      (_id == "")
    )
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

router.delete("/deleteRecord", async (req, res) => {
  try {
    if (!req.body) res.send("Send Body");
    const { _id } = req.body;

    User.findByIdAndDelete({ _id }, (err, docs) => {
      if (err) res.send(err.name);
      res.send(docs);
    });
  } catch (error) {
    console.log("deleteRecord", error.name);
    res.send("error occured").status(500);
  }
});

router.post("/creditSalary", async (req, res) => {
  try {
    if (!req.body) res.send("Send Body");
    const { userId, salaryCredit, month } = req.body;
    console.log(req.body);
    const salary = new Salary({ userId, salaryCredit, month });

    const result = await salary.save();

    res.send(result);
  } catch (error) {
    console.log("creditSalary", error.name);
    res.send("error occured").status(500);
  }
});

router.get("/getSalary", (req, res) => {
  try {
    if (!req.body) res.send("Send Body");
    const { userId } = req.body;
    console.log(req.body);
    const result = Salary.findOne({ _id: userId }).populate("userId");
    res.json(result);
  } catch (error) {
    console.log("creditSalary", error);
    res.send("error occured").status(500);
  }
});
module.exports = router;
