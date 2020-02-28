/* Largest prime factor

Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

const number = 6008;

function testPrime(n) {
  if (n === 2) {
    return true;
  }
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
}

function largestPrimeFactor(num) {
  const primes = [];
  for (let i = 2; i < num; i += 1) {
    if (testPrime(i) && num % i === 0) {
      primes.push(i);
    }

    let product = 0;
    if (primes.length) {
      product = primes.reduce((a, b) => a * b, 1);
    }

    if (product === num) return primes.join(', ');
  }
  return 'Prime Factors not found';
}

largestPrimeFactor(number); // 71, 839, 1471, 6857
