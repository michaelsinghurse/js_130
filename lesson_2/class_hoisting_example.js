// class_hoisting_example.js

console.log('Here\'s the error for a class that is not defined...');
try {
  let dog = new Dog();  
}
catch(error) {
  console.log(error);
}

console.log();
console.log('Here\'s the error for a class that is not defined YET....');

try {
  let cat = new Cat();  
}
catch(error) {
  console.log(error);  
}

class Cat {}