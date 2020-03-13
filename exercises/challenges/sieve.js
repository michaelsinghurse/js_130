// sieve.js

function primes(limit) {
  let primes = [];
  let multiples = [];
  
  for (let testNum = 2; testNum <= limit; testNum += 1) {
    if (multiples.includes(testNum)) continue;
    
    primes.push(testNum);
    
    let testNumMultiples = testNum + testNum;
  
    while (testNumMultiples <= limit) {
      if (!multiples.includes(testNumMultiples)) {
        multiples.push(testNumMultiples);
      }
      
      testNumMultiples += testNum;
    }
  }
    
  return primes;
}

module.exports = primes;