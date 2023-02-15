// Recursion always have a base-case otherwise it will have an infinite loop
// Recursion function calls it self

// Fibonacci Sequence
function recFibo(n) {
  if (n < 2) {
    return n;
  }
  return recFibo(n - 1) + recFibo(n - 2);
}
console.log(recFibo(0));
console.log(recFibo(1));
console.log(recFibo(6));

// Factorial
function recFac(n) {
  if (n === 0) {
    return 1;
  }
  return n * recFac(n - 1);
}
console.log(recFac(10));
console.log(recFac(5));
console.log(recFac(3));

// Linear Search
// Binary Search
