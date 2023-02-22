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
console.log(findMultiples(2, 9));

// SORT AND STAR
function twoSort(s) {
  // return [...s.sort()[0]].join("***");
  return [
    ...s.reduce((acc, curr) => {
      return acc < curr ? acc : curr;
    }),
  ].join("***");
}
console.log(twoSort(["are", "ace", "than", "writing", "out"]));

// RETURNS THE SUM OF ALL THE POSITIVE INTEGERS
function positiveSum(arr) {
  return arr
    .filter((n) => n > 0)
    .reduce((acc, curr) => {
      console.log("acc", acc + " " + "+", curr);
      return acc + curr;
    }, 1);
}
console.log(positiveSum([1, 23, 76, -12]));

// SAFEN USER INPUT - htmlspecialchars
function htmlspecialchars(formData) {
  return (
    (formData = formData.replace(/&/g, "&amp;")) &&
    formData.replace(/</g, "&lt;") &&
    formData.replace(/>/g, "&gt;") &&
    formData.replace(/"/g, "&quot;")
  );
}
console.log(htmlspecialchars('Hello, how would you & I fare?"'));

// CONTAMINATION STRING
function contamination(text, char) {
  // if (text.length === 0 || char.length === 0) return "";
  // let res = "";
  // for (const _ of text) {
  //   res += char;
  // }
  return char.repeat(text.length) + " !";
}
console.log(contamination("laramarie", "Z"));

// ABBREVIATE A TWO WORD NAME
function abbrevName(name) {
  // return (
  //   name[0].toUpperCase() + "." + name[name.indexOf(" ") + 1].toUpperCase()
  // );
  let [first, last] = name.split(" ");
  return first[0].toUpperCase() + "." + last[0].toUpperCase();
}
console.log(abbrevName("jra mrie"));

// CLOCK SERIES
function past(h, m, s) {
  const hours = h * 60 * 60 * 1000;
  const mins = m * 60 * 1000;
  const secs = s * 1000;
  return hours + mins + secs;
}
console.log(past(1, 2, 1));

// NAME SHUFFLER
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(nameShuffler("lara marie"));

// POWER OF 2
function powersOfTwo(n) {
  const res = [];
  for (let i = 0; i <= n; i++) {
    res.push(Math.pow(2, i));
  }
  return res;
}
console.log(powersOfTwo(4));

// DOUBLE THE CHARACTER
function doubleChar(str) {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    res.push((str[i] += str[i]));
  }
  return res.join("");
}
console.log(doubleChar("coldplay"));

// INVERT THE VALUES
function invert(array) {
  let res = [];
  for (const i of array) {
    res.push(i * -1);
  }
  return res;
}
console.log(invert([1, 2, 3, 5, 67, -10, 0, 88]));

// FAKE BINARY
function fakeBin(x) {
  // return x.split("").map((n) => (n < 5 ? "0" : "1"));
  x = x.toString().split("");
  return x.map((n) => (n < 5 ? 0 : 1)).join("");
}
console.log(fakeBin(45385593107843568));

// SORT DESC
const reverseSeq = (n) => {
  let res = [];
  for (let i = n; i > 0; i--) {
    res.push(i);
  }
  return new Array(n)
    .fill()
    .map((d, i) => i + 1)
    .reverse();
};
console.log(reverseSeq(10));

// REVERSE AN ARRAY;
function fixTheMeerkat(arr) {
  return arr.reverse();
}
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]));

// DIVISIBLE BY X AND Y;
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}
console.log(isDivisible(10, 2, 1));
