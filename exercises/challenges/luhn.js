// luhn.js

class Luhn {
	constructor(number) {
		this.number = number;
	}

	_doubleEverySecondElementFromRight(array) {
		for (let index = 0; index < array.length; index += 1) {
			if (index % 2 === 0) continue;
			
			let position = array.length - 1 - index;

			let doubled = array[position] * 2;

			array[position] = doubled > 9 ? doubled - 9 : doubled;
		}
	}

	_hasValidChars() {
		return !this.number.match(/[^0-9 ]/g);
	}

	_hasValidCheckSum() {
		let numNoSpacesArray = this
			._removeSpaces(this.number)
			.split('')
			.map(num => Number(num));
		
		this._doubleEverySecondElementFromRight(numNoSpacesArray);

		let sum = numNoSpacesArray.reduce((acc, val) => acc += val);

		return sum % 10 === 0;
	}

	_hasValidLength() {
		return this._removeSpaces(this.number).length > 1;
	}

	_removeSpaces(str) {
		return str.replace(/ /g, '');
	}

	valid() {
		return this._hasValidChars() && 
					 this._hasValidLength() &&
				   this._hasValidCheckSum();
	}
}

module.exports = Luhn;
