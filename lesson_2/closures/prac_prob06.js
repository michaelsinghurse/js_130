// prac_prob06.js

"use strict";

function bind(context, func) {
  return () => func.call(context);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }