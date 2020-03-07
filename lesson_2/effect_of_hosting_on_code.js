// effect_of_hoisting_on_code.js

// Rewrite the following code in a way that shows the effect that hoisting has 
// on the code:

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);

/*
// After hoisting:

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

var Image;    (no value)
var catImage; (undefined)
var pudding;  (undefined)


Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

class Image {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);


*/