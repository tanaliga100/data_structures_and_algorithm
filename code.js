// Convert number to reversed array of digits
function digitize(n) {
  return [...n.toString()].reverse().map(Number);
}
console.log(digitize(12657819));
// Multiply
function multilply(a, b) {
  return a * b;
}
console.log(multilply(10, 10));
// Is the string upper case ?
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};
// Find numbers which are divisible by given numbers || will return even series of even numbers;
function divisibleBy(numbers, divisor) {
  return numbers.filter((n) => n % divisor === 0);
}
console.log(divisibleBy([2, 3, 9, 12, 10], 2));

//Name on billboard || cannot use '*' operator;
function billboard(name, price = 30) {
  return [...name].reduce((a, c) => {
    console.log("curr", c);
    console.log("acc", a);
    return a + price;
  }, 0);
}
console.log(billboard("lara is a nice woman"));

// Opposites Attract
function lovefunc(flower1, flower2) {
  return (flower1 % 2 === 0 && flower2 % 2 === 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 !== 0)
    ? false
    : true;
}
console.log(lovefunc(1, 2));
console.log(lovefunc(2, 2));
console.log(lovefunc(2, 1));

// Short Long Short || rearranged the array to length => short + long + short;
function solution(a, b) {
  return (a.length < b.length ? a + b + a : b + a + b).length;
}
console.log(solution("lara", "dan"));

//You only need one - Beginner ||  if the array contains the value,
function check(a, x) {
  if (x === "number") {
    x = parseInt(a);
  } else {
    return a.indexOf(x) === -1 ? false : true;
  }
}
console.log(check([100, 200, 33], 100));

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]  || countBy(2,5) === [2,4,6,8,10]
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}
console.log(countBy(1, 10));
console.log(countBy(2, 10));

// FIND MULTIPLES
// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
function findMultiples(integer, limit) {
  const a = [];
  // let inc = 1;
  // while (inc * integer <= limit) {
  //   a.push(inc * integer);
  //   inc++;
  // }
  for (let i = integer; i <= limit; i += integer) {
    a.push(i);
  }
  return a;
}
console.log(findMultiples(2, 100));

// SORT AND STAR
function twoSort(s) {
  const str = s.sort();
  return [...str[0]].join("***");
}
console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 18 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 22 },
];

people.sort((person1, person2) => person1.age - person2.age);
console.log(people);
