const fs = require("fs");
const path = require("path");

try {
  fs.readFile("../../fuc.txt", "utf-8");
} catch (error) {
  fs.appendFile(
    path.join(__dirname, "..", "files", "errorLogs.txt"),
    `${new Date()}\t\t${error}\n`,
    (err) => {
      console.log("errr");
    }
  );
}
