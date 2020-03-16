// custom_set.js

class CustomSet {
	constructor(array = []) {
		this.set = array;
	}

	contains(val) {
		return this.getSet().includes(val);
	}

	disjoint(testSet) {
		if (!this._isSet(testSet)) return false;
		
		return this.getSet().length === 0 ||
					 testSet.getSet().length === 0 ||
					 this.getSet().every(element => !testSet.getSet().includes(element));
	}

	empty() {
		return this.getSet().length === 0;
	}

	getSet() {
		return this.set;
	}
	
	_isSet(testObj) {
		return testObj instanceof CustomSet;
	}

	subset(testSet) {
		if (!this._isSet(testSet)) return false;
		
		return this.getSet().every(element => testSet.getSet().includes(element));
	}
}

let set = new CustomSet();
console.log(set.empty());

let set2 = new CustomSet([1]);
console.log(set2.empty());

module.exports = CustomSet;
