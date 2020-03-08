// prac_prob05.js

function later2(func, param1) {
  return function(param2) {
    func(param1, param2);
  };
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");

shutdownWarning(5);
shutdownWarning(10);