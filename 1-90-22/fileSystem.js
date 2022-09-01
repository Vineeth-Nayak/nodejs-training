const fs = require("fs");

const readFile = (path) => {
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    console.log("from reading op: ", data.toString());
  });
};

const writeFile = (path, data) => {
  fs.writeFile(path, data, (err) => {
    if (err) throw err;
    console.log("write done");
  });
};

const appendFile = (path, data) => {
  fs.appendFile(path, data, (err) => {
    if (err) throw err;
    console.log("append done");
  });
};

readFile("../files/some.txt");
writeFile("../files/hello.txt", "Hello maccha");
readFile("../files/hello.txt");
appendFile("../files/hello.txt", "\tHello maccha 2");
readFile("../files/hello.txt");
