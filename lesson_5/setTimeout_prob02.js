// setTimeout_prob02.js

function delayLog() {
	for (var counter = 1; counter <= 10; counter += 1) {
		setTimeout(() => console.log(counter), counter * 1000);
	}
}

delayLog();
