const { EventEmitter } = require("stream");
const logger = require("./logger.js");

emitter.on("log", (event) => {
  console.log(event);
});

logger.log(() => {
  console.log("...doing something!");
});
