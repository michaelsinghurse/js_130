// our_own_bind.js

function myBind(func, context) {
  return function(...args) {
    return func.apply(context, args);
  };
}

let obj = {father: 'Michael', mother: 'Ursula'};

function concat(feeling1, feeling2) {
  console.log('My parents are ' + this.father + ' and ' + this.mother);
  console.log('I feel ' + feeling1 + ' and ' + feeling2);
}

let sayParents = myBind(concat, obj);
sayParents('happy', 'energized');