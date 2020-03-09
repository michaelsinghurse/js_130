// prac_prob01.js

function makeCounterLogger(firstNumber) {
  return function(secondNumber) {
    let increment = 0;
    
    if (firstNumber < secondNumber) {
      increment = 1;
    } else if (firstNumber > secondNumber) {
      increment = -1;
    }
    
    let logNumber = firstNumber;
    
    while (true) {
      console.log(logNumber);
      if (logNumber === secondNumber) break;
      logNumber += increment;
    } 
  };
}

let countLog = makeCounterLogger(5);
countLog(-2);

