const express = require("express");
const router = express.Router();
const port = process.env.PORT | 5000;

// db Connection
const databaseConnect = require("./config/dbConn");

// routes
const userRouter = require("./routes/Users/user");

app = express();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

databaseConnect();

app.use("/", router);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello preetham");
});

app.listen(port, () => console.log("Running port", port));
