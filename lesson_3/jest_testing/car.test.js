// car.test.js
const Car = require("./car");

describe("The Car class", () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });
  
  test("has four wheels", () => {
    expect(car.wheels).toBe(4);
  });
  
  xtest("bad wheels", () => {
    expect(car.wheels).toBe(3);
  });
  
  test("two new cars are equal objects", () => {
    let car2 = new Car();
    
    expect(car).toEqual(car2);
  });
  
  test("does not have doors", () => {
    expect(car.doors).toBeUndefined();
  });
  
  test("raises an error when drive() called on it", () => {
    expect(() => car.drive()).toThrow();
  });
  
  test("raises a TypeError when drive() called on it", () => {
    expect(() => car.drive()).toThrow(TypeError);
  });
  
  test("a new car has no mileage information", () => {
    expect(car.mileageInfo).not.toBeTruthy();
  });
});