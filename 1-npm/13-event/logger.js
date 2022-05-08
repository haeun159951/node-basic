const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(callback) {
    emit("log", "started...");
    callback();
    emit("log", "ended...");
  }
}

module.exports.Logger = Logger;
