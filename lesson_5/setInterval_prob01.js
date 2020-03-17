// setInterval_prob01.js

function startCounting() {
	let count = 1;
	setInterval(() => {
		console.log(count);
		count += 1;
	}, 1 * 1000);
}

startCounting();
