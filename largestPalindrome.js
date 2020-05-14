/* 

Largest palindrome product

Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. 

*/

console.time('Timing');

let largestPalindrome = 0,
  num1,
  num2;
for (let i = 999; i >= 111; i--) {
  for (let j = 999; j >= 111; j--) {
    const product = i * j;
    const reverseProduct = parseInt(
      (product + '').split('').reverse().join('')
    );
    if (product === reverseProduct) {
      if (product > largestPalindrome) {
        num1 = i;
        num2 = j;
        largestPalindrome = product;
      }
    }
  }
}

console.timeEnd('Timing');

console.log(
  `The largest palindrome made from the product of two 3-digit numbers is ${largestPalindrome} = ${num1} x ${num2}`
);
// 906609 = 993 x 913
