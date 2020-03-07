// prac_prob04.js

function later(func, param) {
  return function () {
    func(param);
  };
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
logWarning(); // The system is shutting down!
