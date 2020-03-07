// prac_prob03.js

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2);     // factor => 2 * factor
let result = bar(3);  // prod = 6, returns 6, result = 6
result += bar(4);     // prod = 24, returns 24, result 30
result += bar(5);     // prod = 120, returns 120, result 150
console.log(result);  // 150