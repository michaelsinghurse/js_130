// prac_prob06.js

function product() {
  let numbers = Array.from(arguments);
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
console.log(result);