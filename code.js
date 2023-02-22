// REVERSED ARRAY DIGITS
function digitize(n) {
  return [...n.toString()].reverse().map(Number);
}
console.log(digitize(139714043));
// MULTIPLY DIGITS
function multilply(a, b) {
  return a * b;
}
console.log(multilply(10, 10));

// IS THE STRING UPPERCASE ?
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase(); // 2 equals == checking the data-type only so will return true;
};

// FIND NUMBERS WHICH ARE DIVISIBLE BY GIVEN NUMBER || will return even series of even numbers;
function divisibleBy(numbers, divisor) {
  // let even = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] % divisor === 0) {
  //     even.push(numbers[i]);
  //   }
  // }
  return numbers.filter((n) => n % divisor === 0);
}
console.log("DIVISIBLE", divisibleBy([2, 3, 9, 12, 10], 2));

// NAME ON A BILLBOARD || cannot use '*' operator;
function billboard(name, price = 30) {
  return [...name].reduce((acc, curr) => {
    return acc + price;
  }, 0);
}
console.log(billboard("lara"));

// OPPOSITE ATTRACT
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
  //value = 0 is not equal to 0 || will return true else false;
}
console.log(lovefunc(1, 2));
console.log(lovefunc(2, 2));
console.log(lovefunc(2, 1));

// SHORT-LONG-SHORT || rearranged the array to length => short + long + short;
function solution(a, b) {
  return a.length > b.length ? b + a + b : a + b + a;
}
console.log(solution("lara", "dan"));

//YOU ONLY NEED ONE - Beginner ||  if the array contains the value,
function check(a, x) {
  return a.indexOf(x) > -1;
  // if its '-1', meaning there is nothing
  // if its greater than '-1', there has the value of x inside the array of 'a'
}
console.log(check([100, 200, 33], 100));

// COUNT BY : (1,10) === [1,2,3,4,5,6,7,8,9,10]  || countBy(2,5) === [2,4,6,8,10]
function countBy(x, n) {
  let a = [];
  for (let i = 1; i <= n; i++) {
    a.push(x * i);
  }
  return a;
}
console.log("countBy", countBy(1, 5));
console.log("countBy", countBy(2, 3));

// FIND MULTIPLES
// For example, if the parameters passeda re (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
function findMultiples(integer, limit) {
  const a = [];
  for (let i = integer; i <= limit; i += integer) {
    a.push(i);
  }
  return a;
}
console.log(findMultiples(2, 6));

// SORT AND STAR
