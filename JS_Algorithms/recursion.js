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
function recursiveSearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}
function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}
console.log(recursiveSearch("recursiveBinary", [-2, 2, 4, 6, 10]), 10);
console.log(recursiveSearch("recursiveBinary", [-2, 2, 4, 6, 10]), 6);
console.log(recursiveSearch("recursiveBinary", [-2, 2, 4, 6, 10]), 20);

// Binary Search
