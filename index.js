// const Emmiter = require("events");
const Emmiter = require("./Emmiter");

const emtr = new Emmiter();

console.log(emtr);

emtr.on("greet", () => {
  console.log("Hi!");
});

emtr.on("greet", () => {
  console.log("Hey!");
});

console.log("trigger event 'greet'");

emtr.emit("greet");
