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
