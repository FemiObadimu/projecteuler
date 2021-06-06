

// https://ficazzosam.github.io/panthers_form_validation/
let factors = [];
let primes = [];

function getFactors(limit) {
  for (let i = 0; i < limit; i++) {
    if (limit % i == 0) {
      factors.push(i);
    }
  }

  let min = factors[0];
  let max = factors[factors.length - 1];
  // loops through the min and max numbers of factors
  for (let i = min; i <= max; i++) {
    let still = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        still = 1;
        break;
      }
    }
    // num > 1 and not divisible by other num
    if (i > 1 && still == 0) {
      primes.push(i);
    }
  }

  let primeFactors;
  primeFactors = primes.filter((element) => factors.includes(element));
  return primeFactors[primeFactors.length - 1];
}
console.log(getFactors(123456));

// @devsInstutute cares.