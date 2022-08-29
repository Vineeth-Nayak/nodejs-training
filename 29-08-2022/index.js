const os = require("os");

// EOL -> Adds new line(\r\n)
console.log("Hello" + os.EOL + "Saar", os.EOL);

// arch -> gives architecture
console.log("node is compiled on", os.arch(), os.EOL);

// returns array info about all users
console.log("users info", os.cpus()[0], os.EOL);

// returns  amount of free system memory in bytes as an integer
console.log("Free memory available in bytes", os.freemem(), os.EOL);

// path of home directory
console.log("Home directory", os.homedir(), os.EOL);

// network interfaces
console.log(
  "network interfaces: Ethernet",
  os.networkInterfaces().Ethernet[0],
  os.EOL
);

// Os where node js is compiled
console.log("OS", os.platform(), os.EOL);

// Os version where node js is compiled
console.log("OS realse", os.release(), os.EOL);
