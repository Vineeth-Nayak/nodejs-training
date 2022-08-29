const os = require("os");

// EOL -> Adds new line(\r\n)
console.log("Hello" + os.EOL + "Saar", os.EOL);

// arch -> gives architecture
console.log("node is compiled on", os.arch(), os.EOL);

// returns array info about all users
console.log("users info", os.cpus()[0], os.EOL);

// returns  amount of free system memory in bytes as an integer
console.log("Free memory available in bytes", os.freemem(), os.EOL);
