// First Algo
// FIBONACCI SEQUENCE
// define a function signature

// * get the last element [a] and the next to the last element [b]
// exp = a - b
function fibo(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    console.log("itration", i, n);
    fib[i] = fib[i - 1] + fib[i - 2];
    // 0 + 1 = 1
    // 1 + 0 = 1
    // 1 + 1 = 2
    // 2 + 1 = 3
    // 3 + 2 = 5
  }
  return fib;
}
console.log(fibo(10));
console.log(fibo(5));

// Second Algo
// Factorial of a number

function factorial(n) {
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res = res * i;
    console.log("res", res);
  }
  return res;
}
console.log(factorial(4)); // 6
console.log(factorial(5)); // 120

// Third Algo
// Prime number
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n > 1) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
      return "Yes, that is a prime number";
    }
  }
}
console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
// Big-0 is linear

// Fourth Algo
// Power of Two
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return "Yes its a power of two";
}
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(10)); // false
console.log(isPowerOfTwo(8)); // false
