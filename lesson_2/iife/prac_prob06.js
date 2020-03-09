// prac_prob06.js

"use strict";

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

let bar = (function(start) {
  let prod = start;
  return function(factor) {
    prod *= factor;
    return prod;
  };
})(2);

let result = bar(3);  // prod = 6, return 6, result = 6
result += bar(4);     // prod = 24, return 24, result = 30
result += bar(5);     // prod = 120, return 120, result = 150
console.log(result);  // 150