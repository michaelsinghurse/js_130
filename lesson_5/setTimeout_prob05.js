// setTimeout_prob05.js

function afterNSeconds(callback, wait) {
	setTimeout(callback, wait * 1000);
}

afterNSeconds(() => console.log('hello'), 4);
