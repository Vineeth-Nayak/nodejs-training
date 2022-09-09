const databaseConnect = () => {
  const mongoose = require("mongoose");
  const mongodbURL = "mongodb://localhost/task1";
  mongoose
    .connect(mongodbURL)
    .catch((err) => console.log("Error while connecting...."));

  const db = mongoose.connection;
  db.on("error", console.log("error while connecting"));
  db.once("open", (err, res) => {
    if (err) return console.log(err.stack);
    console.log("Successfull conection to DB");
  });
};

module.exports = databaseConnect;
