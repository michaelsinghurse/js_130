// triangle.js

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  
  _isEquilateral() {
    return this.side1 === this.side2 &&
           this.side1 === this.side3 &&
           this.side2 === this.side3;
  }
  
  _isIsosceles() {
    return this.side1 === this.side2 ||
           this.side1 === this.side3 ||
           this.side2 === this.side3;
  }
  
  _validateTriangle() {
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
      throw new Error();
    }
    
    if (this.side1 + this.side2 <= this.side3 ||
        this.side1 + this.side3 <= this.side2 ||
        this.side2 + this.side3 <= this.side1) {
      throw new Error();
    }
  }
  
  kind() {
    this._validateTriangle();
    
    if (this._isEquilateral()) {
      return "equilateral";
    } else if (this._isIsosceles()) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}

module.exports = Triangle;