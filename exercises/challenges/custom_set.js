// custom_set.js

class CustomSet {
	constructor(array = []) {
		this.set = array;
	}

	add(val) {
		if (!this.getSet().includes(val)) {
			this.set.push(val);
		}

		return this;
	}

	contains(val) {
		return this.getSet().includes(val);
	}

	difference(testSet) {
		if (!this._isSet(testSet)) return false;

		let set = new CustomSet();

		this.getSet().forEach(element => {
			if (!testSet.getSet().includes(element)) {
				set.add(element);
			}
		});
	
		return set;
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

	eql(testSet) {
		if (!this._isSet(testSet)) return false;

		return this.getSet().length === testSet.getSet().length &&
				   this.getSet().every(element => testSet.getSet().includes(element));
	}

	getSet() {
		return this.set;
	}

	intersection(testSet) {
		if (!this._isSet(testSet)) return false;

		let set = new CustomSet();

		this.getSet().forEach(element => {
			if (testSet.getSet().includes(element)) {
				set.add(element);
			}
		});

		return set;
	}

	_isSet(testObj) {
		return testObj instanceof CustomSet;
	}

	subset(testSet) {
		if (!this._isSet(testSet)) return false;
		
		return this.getSet().every(element => testSet.getSet().includes(element));
	}

	union(testSet) {
		if(!this._isSet(testSet)) return false;

		let set = new CustomSet();
		
		this.getSet().forEach(element => set.add(element));

		testSet.getSet().forEach(element => set.add(element));
			
		return set;
	}
}

module.exports = CustomSet;
