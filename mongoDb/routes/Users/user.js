const express = require("express");
const router = express.Router();
const { User, Salary } = require("../../models/index");

router.post("/addUser", async (req, res) => {
  try {
    if (!req.body) return;
    const { name, dateOfBirth, email, password, age, address } = req.body;
    const user = new User({
      name,
      dateOfBirth,
      email,
      password,
      age,
      addresses: { address },
    });
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

router.put("/addAddress", async (req, res) => {
  try {
    if (!req.body) return;
    const { address, userId } = req.body;
    User.findByIdAndUpdate(
      { _id: userId },
      {
        $push: { addresses: { address } },
      },
      (err, docs) => {
        if (err) res.send(err);
        res.send(docs);
      }
    );
    // .exec((err, docs) => {
    //   if (err) res.send(err);
    //   res.send(docs);
    // });
  } catch (error) {
    console.log(error.name);
    res.send("Error occured").status(500);
  }
});

router.put("/updateAddress", async (req, res) => {
  try {
    if (!req.body) return;
    const { userId, addressId, address, deleteAddress } = req.body;
    if (deleteAddress === true) {
    } else {
      [
        {
          $match: {
            _id: new ObjectId("632067519ced82c8442a369e"),
          },
        },
        {
          $unwind: {
            path: "$addresses",
          },
        },
        {
          $match: {
            "addresses._id": new ObjectId("63206b8eeeb48f1c02b62054"),
          },
        },
        {
          $set: {
            "addresses.address": "expression",
          },
        },
      ];
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

router.get("/getSalary", async (req, res) => {
  try {
    if (!req.body) res.send("Send Body");
    const { salaryId } = req.body;
    console.log(req.body);
    const result = await Salary.findOne({ _id: salaryId })
      .select({ salaryCredit: 1, month: 1 })
      .populate("userId", { name: 1 });
    res.json(result);
  } catch (error) {
    console.log("creditSalary", error);
    res.send("error occured").status(500);
  }
});

router.get("/salary", async (req, res) => {
  try {
    if (!req.body) res.send("Send Body");
    const { salaryCondition, monthCondition } = req.body;
    console.log(req.body);
    const result = await Salary.find({
      $and: [
        { salaryCredit: { $gt: salaryCondition } },
        { month: { $lt: monthCondition } },
      ],
    })
      .select({ salaryCredit: 1, month: 1 })
      .populate("userId", { name: 1 });
    res.json(result);
  } catch (error) {
    console.log("creditSalary", error);
    res.send("error occured").status(500);
  }
});

router.get("/aggregateExample", async (req, res) => {
  try {
    if (!req.body) res.send("Send Body");
    // const {}
  } catch (error) {
    console.log("creditSalary", error);
    res.send("error occured").status(500);
  }
});
module.exports = router;
