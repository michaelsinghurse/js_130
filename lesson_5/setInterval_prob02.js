// setInterval_prob02.js

function startCounting() {
	let count = 1;
	let id = setInterval(() => {
		console.log(count);
		count += 1;
	}, 1 * 1000);
	
	return id;
}

function stopCounting(setIntervalId, seconds) {
	setTimeout(() => clearInterval(setIntervalId), seconds * 1000);
}

let countId = startCounting();

stopCounting(countId, 15);
