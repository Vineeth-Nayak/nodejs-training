const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("some-event", () => {
  console.log("an event occurred");
});

myEmitter.emit("some-event");

setTimeout(() => {
  console.log("time out");
}, 0000);

// after all operations done run
setImmediate(() => {
  console.log("this runs last");
});

let count = 5;
while (count != 0) {
  console.log("this happens ");
  count--;
}
