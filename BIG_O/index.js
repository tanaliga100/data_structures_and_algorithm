// # Data Structures and Algorithm in - JS

// ### Algorithm

// - sets of well defined instructions to solve a particular problem
// - A steps || can be procedural or functional

// * Characteristics = has the data to be manipulated

// - one problem can be solved in different alogrithms
// - every algo comes with its own tradeoffs when it comes to perfomrance
// - Big-O Notation|| worst case complexity

// * BIG - O || Simulation using Objects

// - insert = O(1)
// - remove = O(1)
// - access = O(1)
// - search = O(n) || linear
// - Object.keys() = O(n) = return an array of all the keys in objects
// - Object.values() = O(n) = return an array of all the values in objects
// - Object.entries() = O(n) = return an array of all the elements in the object [key, value]

// * BIG - O || Simulation using Arrays

// - insert = O(1)
// - remove at the end of an array = O(1)
// - remove at the beginning of the array = O(n) linear because index has to be reset
// - access = O(1)
// - searching = O(n)
// - pop/push = O(1)
// - shift/unshift/concat/splice/slice = O(n)
// - forEach/map/filter/reduce = O(n)

// simmulation of Big-O || Time-Complexity
function sumUp(a) {
  const res = (a / 2) * 1 + a;
  console.log(res);
}
sumUp(3);
sumUp(10);
sumUp(20);

function sumThis2(a) {
  let res = 0;
  for (let i = 0; i < a; i++) {
    console.log(`${res}`);
    const result = (res += a);
    console.log(result);
  }
}
sumThis2(10);

// BETTER SOLUTION
function sumNumbers(nums) {
  let temp = 0; // once
  for (const arg of nums) {
    // once
    console.log("..."); // seven times

    temp = temp + arg; // seven times || cause it will loop the length of el in the array
  }
  return temp; // once
}

// NOT OPTIMIZED
function sumNumbers2(nums) {
  return nums.reduce((sum, currNum) => sum + currNum, 0);
}

let numbers = [1, 2, 5, 7, 8, 10, 100];
const res = sumNumbers(numbers);
const res2 = sumNumbers2(numbers);
console.log(res2);

// T =  1 + 1 + 1 + n + n = 3 + 2n = 3 + 2 * n
// T = 2*n
// T = n => 0(n) => Linear time complexity
