// kindergarten_garden.js

class Garden {
	constructor(diagram, students) {
		if (students) {
			students = students.slice().sort();
		} else {
			students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny',
				'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
		}

		let plants = diagram.split('\n');

		this._assignPlants(students, plants);
	}

	_assignPlants(students, plants) {
		students.forEach((student, index) => {
			this[student.toLowerCase()] = this._getPlantNameArray(plants, index);
		});
	}

	_getPlantNameArray(plants, position) {
		let plantArray = [];

		plantArray.push(this._plantNameFromLetter(plants[0][0 + position * 2]));
		plantArray.push(this._plantNameFromLetter(plants[0][1 + position * 2]));
		plantArray.push(this._plantNameFromLetter(plants[1][0 + position * 2]));
		plantArray.push(this._plantNameFromLetter(plants[1][1 + position * 2]));

		return plantArray;
	}

	_plantNameFromLetter(letter) {
		const PLANT_SYMBOL_TO_NAME = {
			C: 'clover', 
			G: 'grass', 
			R: 'radishes', 
			V: 'violets',
		};

		return PLANT_SYMBOL_TO_NAME[letter];
	}
}

module.exports = Garden;
