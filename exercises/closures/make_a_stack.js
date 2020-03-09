// make_a_stack.js

function newStack() {
  let stack = [];
  
  return {
    pop() {
      return stack.pop();  
    },
    
    printStack() {
      stack.forEach(item => console.log(item));
    },
    
    push(val) {
      stack.push(val);
    }
  };
}

let stack = newStack();
console.log(stack.hasOwnProperty('stack'));   // false
stack.push('hello');
stack.push('world');
stack.printStack();
stack.pop();
console.log();
stack.printStack();