const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
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
    const { addressId, address, deleteAddress } = req.body;

    // ! search for addresses and addressId  $: to access nested objects -> address
    if (deleteAddress == true) {
      User.findOneAndDelete({ "addresses._id": addressId }).exec(
        (err, docs) => {
          console.log(err);
          res.send(docs);
        }
      );
    } else {
      User.updateOne(
        { "addresses._id": addressId },
        { "addresses.$.address": address }
      ).exec((err, docs) => {
        res.send(docs);
      });
    }
  } catch (error) {
    console.log(error);
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

router.delete("/deleteAddress", async (req, res) => {
  try {
    if (!req.body) res.send("Send Body");
    const { userId, addressId } = req.body;

    User.findByIdAndUpdate(
      { _id: userId },
      { $pull: { addresses: { _id: addressId } } },
      { new: true },
      (err, docs) => {
        if (err) res.send(err.name);
        res.send(docs);
      }
    );
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
    const { userId, addressId, address } = req.body;
    var pipeline = [
      {
        $match: {
          _id: mongoose.Types.ObjectId(userId),
        },
      },
      {
        $unwind: {
          path: "$addresses",
        },
      },
      {
        $match: {
          "addresses._id": mongoose.Types.ObjectId(addressId),
        },
      },
      {
        $set: {
          "addresses.address": address,
        },
      },
    ];

    User.aggregate(pipeline).exec((err, docs) => {
      if (err) res.send(err);
      else res.send(docs);
    });
  } catch (error) {
    console.log("creditSalary", error);
    res.send("error occured").status(500);
  }
});

module.exports = router;
