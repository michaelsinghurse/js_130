// prac_prob05.js

"use strict";

function product(...nums) {
  if (nums.length === 0) return 1;
  let num = nums.shift();
  return num * product(...nums);
}

let array = [2, 3, 5, 10];
let result = product(...array);
console.log(result);