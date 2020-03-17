// setTimeout_prob01.js

function delayLog() {
	for (let counter = 1; counter <= 10; counter += 1) {
		setTimeout(() => console.log(counter), counter * 1000);	
	}
}

delayLog();
