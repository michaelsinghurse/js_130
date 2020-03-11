// mini_inventory.js

let ItemCreator = (function() {
  function generateSku(name, category) {
    let sku = '';
    
    let index = 0;
    while (sku.length < 3) {
      if (name[index] !== ' ') {
        sku += name[index].toUpperCase();
      }
      index += 1;
    }
    
    index = 0;
    while (sku.length < 5) {
      sku += category[index].toUpperCase();
      index += 1;
    }
    
    return sku;
  }
  
  function isOneWord(word) {
    return word.trim().split(' ').length === 1;
  }
  
  function isValidCategory(category) {
    return isOneWord(category) && isValidName(category); 
  }
  
  function isValidName(name) {
    let nameNoSpaces = name.split('').filter(char => char !== ' ').join('');
    return nameNoSpaces.length >= 5;
  }
  
  function isValidQuantity(quantity) {
    return quantity >= 0;
  }
  
  return function(name, category, quantity) {
    if (isValidName(name)         && 
        isValidCategory(category) && 
        isValidQuantity(quantity)) {
      this.name = name;
      this.category = category;
      this.quantity = quantity;
      this.sku = generateSku(name, category);
    } else {
      return { notValid: true };
    }
  };
})();

let ItemManager = {
  items: [],
  
  create(name, category, quantity) {
    let item = new ItemCreator(name.trim(), category.trim(), quantity);
    
    if (!item.notValid) {
      this.items.push(item);
      return true;  // return not in spec but don't want to return falsey value
    } else {
      return false;
    }
  },
  
  delete(sku) {
    this.items = this.items.filter(item => item.sku !== sku);
  },
  
  getItem(sku) {
    return this.items.find(obj => obj.sku === sku);
  },
  
  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },
  
  itemsInCategory(searchCategory) {
    return this.items.filter(item => item.category === searchCategory);
  },
  
  update(sku, updateObj) {
    let item = this.items.find(obj => obj.sku === sku);
    if (!item) return;
    Object.keys(updateObj).forEach(updateProp => {
      if (item.hasOwnProperty(updateProp)) {
        item[updateProp] = updateObj[updateProp];
      }
    });
    return true;
  }
};

let ReportManager = {
  itemManager: {},  // spec says to name this property `items`
  
  init(itemManager) {
    this.itemManager = itemManager;
  },
  
  createReporter(sku) {
    let item = this.itemManager.getItem(sku);
    if (!item) return;
    
    return {
      itemInfo() {
        Object.keys(item).forEach(key => {
          console.log(`${key}: ${item[key]}`);
        });
      }
    };
  },
  
  reportInStock() {
    let namesInStock = this.itemManager.inStock().map(item => item.name);
    console.log(namesInStock.join(', '));
  },
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// // logs soccer ball,football,kitchen pot
ReportManager.reportInStock();
console.log();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// // football,kitchen pot
ReportManager.reportInStock();
console.log();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3
console.log();

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10;

