const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const something = async () => {
  // ask a question
  rl.question(`What is your name?\n`, async (name) => {
    console.log(`Hi ${name}, How are you? \na.Fine, b.Not fine\nselect a or b`);

    // after user presses Enter run this
    rl.on("line", (input) => {
      if (input == "a") console.log(`Good go d*e ${name}`);
      else if (input == "b") console.log(`Go listen to songs ${name}`);
      else console.log(`${name} Are you stuped i told to select "a" or "b"`);
      readline.clearScreenDown();
      rl.close();
    });
  });
};
something();
