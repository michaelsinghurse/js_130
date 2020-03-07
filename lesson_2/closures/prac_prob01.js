// prac_prob01.js

function makeMultipleLister(num) {
  return function() {
    let printNum = Math.abs(num);
    while (printNum < 100) {
      console.log(printNum);
      printNum += Math.abs(num);
    }
  };
}

let lister = makeMultipleLister(-10);
lister();