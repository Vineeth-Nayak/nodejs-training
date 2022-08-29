const path = require("path");
const os = require("os");

// add "\r\n" End of line
const EOL = os.EOL;

// get dirname
console.log(EOL, __dirname, EOL);

// get full directory with filename
console.log(__filename, EOL);

exports.sad = () => {
  console.log("");
};

// console.log(module.exports);

// only give file name
console.log(path.basename(__filename), EOL);
