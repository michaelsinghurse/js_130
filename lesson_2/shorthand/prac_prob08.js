// prac_prob08.js

function makeObj(...strings) {
  return {
    first: strings[0],
    middle: (function() {
      let newString = [...strings]; 
      newString.shift();
      newString.pop();
      return newString.sort();
    })(),
    last: strings[strings.length - 1],
  };
}

let args = ['Michael', 'Ursula', 'Zofia', 'Bernadette', 'Nathanael'];
let { first, middle, last } = makeObj(...args);
console.log(first);
console.log(middle);
console.log(last);

