// prac_prob07.js

"use strict";

(function countdown(num) {
  if (num < 0) return;
  console.log(num);
  countdown(num - 1);
})(10);