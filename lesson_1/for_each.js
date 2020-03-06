// for_each.js

function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index], index, array);
  }
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");

forEach([1, 2, 3, 4], element => console.log(element ** 2));
forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);  // error

forEach(['a', 'b', 'c'], (val, ind, arr) => {
  console.log(`After ${val} comes ${arr[ind + 1] || 'nothing'}`);
});