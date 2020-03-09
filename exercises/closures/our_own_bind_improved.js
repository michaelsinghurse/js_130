// our_own_bind_improved.js

function myBind(func, context, ...args1) {
  return function(...args2) {
    return func.apply(context, [...args1, ...args2]);
  };
}

let obj = {father: 'Michael', mother: 'Ursula'};

function concat(...feelingsArr) {
  console.log('My parents are ' + this.father + ' and ' + this.mother);
  console.log('I feel ' + feelingsArr.join(', '));
}

let sayParents = myBind(concat, obj, 'happy');
sayParents('overjoyed', 'exhuberant', 'giddy');