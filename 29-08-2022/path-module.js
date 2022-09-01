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

// only give file name //! for consistant results add path.win2.basename on all OS
console.log(path.basename(__filename), EOL);
console.log(path.basename(__filename, ".js"), EOL); // gives only "index" slices ".js"

// gives directory of the spicified file
console.log(path.dirname(__filename), EOL);

// gives extension of the spicified file
console.log(path.extname(__filename), EOL);

// givesobject form of path
console.log(path.parse(__filename), EOL);

// file seperator
console.log(__filename.split(path.sep), EOL);

// joins path
console.log(path.join("fasd", "asdasd"));
