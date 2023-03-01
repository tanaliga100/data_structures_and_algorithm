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

// PYTHAGOREAN
function isPythagoreanTriple(integers) {
  const nums = integers.sort((a, d) => a - d);
  console.log(nums);
  return nums[0] ** 2 + nums[1] ** 2 === nums[2] ** 2;
}
console.log(isPythagoreanTriple([3, 5, 4]));

// ALWAYS RETURNS 5
function unusualFive() {
  return ".....".length;
}
console.log(unusualFive());

// SUM MIXED VALUES
function sumMix(x) {
  return x.map(Number).reduce((acc, curr) => acc + curr, 0);
}
console.log(sumMix([1, 3, 6, 2, "9", "3"]));

// REMOVE THE FIRST AND LAST INDEX VALUES
function removeChar(str) {
  return str.slice(1, -1);
  // return str.substring(1, str.length - 1);
}
console.log(removeChar("lara marie is all"));

// HOW MUCH I LOVE YOU
function howMuchILoveYou(nbPetals) {
  const dics = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  let calc = dics[(nbPetals - 1) % 6];

  return calc;
}
console.log(howMuchILoveYou(1));

// CATEGORIZE NEW MEMBER
function openOrSenior(data) {
  return data.map(([age, handicap, thing]) => {
    return age >= 55 && handicap > 7 ? "Senior" : "Open";
  });
}
console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);

// COMPLEMENTARY DNA
function DNAStrand(dna) {
  const dict = { A: "T", C: "G", G: "C", T: "A" };
  return [...dna].map((base) => dict[base]).join("");
}
console.log(DNAStrand("ATTGC"));

// SUM ALL WITHOUT THE HIGHEST AND LOWEST NUMBER;
function sumArray(array) {
  return Array.isArray(array) && array.length > 1
    ? array.reduce((acc, curr) => acc + curr, 0) -
        Math.min(...array) -
        Math.max(...array)
    : 0;
}
console.log(sumArray([-6, -20, -1, -10, -12]));

// COUNT SHEEP
var countSheep = function (num) {
  let newStr = "";
  for (let i = 1; i <= num; i++) {
    newStr += `${i}sheep... `;
    return newStr;
  }
};
console.log(countSheep(10));

// A SQUARE OF SQUARES
var isSquare = function (n) {
  const root = Math.sqrt(n);
  return root === Math.floor(root);
};
console.log(isSquare(25));

// ROCK PAPER SCISSORS
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  let rules = { paper: "scissors", rock: "paper", scissors: "rock" };
  if (p1 === rules[p2]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
console.log(rps("rock", "paper"));

// MAX AND MIN VALUES IN THE LIST;
var min = function (list) {
  return Math.min(...list);
};
var max = function (list) {
  return Math.max(...list);
};
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));

// NUMBERS OF BULLETS TO CARRY TO DEFEAT THE DRAGON;
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}
console.log(hero(10, 5));

//EX AND OHS
function XO(str) {
  const arr = str.toUpperCase().split("");
  let x = "";
  let o = "";
  return x.length === o.length;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "X" || arr[i] === "O") {
      x += arr[i] === "X";
      o += arr[i] === "O";
    }
  }
}
console.log(XO("XXoom"));

// GET THE GRADE
function getGrade(s1, s2, s3) {
  let grade = Math.floor((s1 + s2 + s3) / 3);
  let letterGrade;
  switch (true) {
    case grade >= 90:
      letterGrade = "A";
      break;
    case grade >= 80:
      letterGrade = "B";
      break;
    case grade >= 70:
      letterGrade = "C";
      break;
    case grade >= 60:
      letterGrade = "D";
      break;
    default:
      letterGrade = "F";
      break;
  }
  return letterGrade;
}
console.log(getGrade(95, 90, 93));

// TWO TO ONE
function longest(s1, s2) {
  const combined = s1.concat(s2);
  const un = [...new Set(combined)];
  return un.sort().join("");
}
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));

// REVERSE WORDS;
function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => [...word].reverse().join(""))
    .join(" ");
}
console.log(reverseWords("Lara is the just"));

// SUM OF TWO LOWEST POSITIVE INTEGERS;
function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, d) => a - d)
    .slice(0, 2)
    .reduce((a, c) => a + c, 0);
}
console.log(sumTwoSmallestNumbers([1, 5, 8, 12, 19, 22]));

var summation = function (num) {
  let sum = 0; // 1,3
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};
console.log(summation(3));

// Ones && Zeros
const binaryArrayToNumber = (arr) => {
  return [...arr][0];
};
console.log(binaryArrayToNumber([12, 1, 1, 1]));

// DUPLICATE ENCODE
function duplicateEncode(word) {
  word = word.toLowerCase();
  let charCount = {};
  for (let i = 0; i < word.length; i++) {
    if (word[i] in charCount) {
      charCount[word[i]]++;
    } else {
      charCount[word[i]] = 1;
    }
  }
  let str = "";
  for (let i = 0; i < word.length; i++) {
    if (charCount[word[i]] > 1) {
      str += ")";
    } else {
      str += "(";
    }
  }
  return str.toLowerCase();
}

// GET THE VOWELS COUNT
const getCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};
console.log(getCount("lara is the just"));

// SORT ODD NUMBERS || RETAIN EVEN NUMBERS TO THEIR POSITIONS
function sortArray(array) {
  const oddNums = array.filter((num) => num % 2 !== 0).sort((a, d) => a - d);
  return array.map((num) => (num % 2 !== 0 ? oddNums.shift() : num));
  // return array.map((num) => (num % 2 !== 0 ? oddNums.shift() : num));
}
// 1  3  2  8  5  4
console.log(sortArray([5, 3, 2, 8, 1, 4]));
// CALCULATE THE FUEL
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};
console.log(zeroFuel(50, 25, 2));
//LOST WITHOUT A MAP
function maps(x) {
  return x.map((num) => num * 2);
}
console.log(maps([2, 5, 10, -3]));
// HEXADECIMAL
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}
console.log(hexToDec("FF"));
// COUNT POSITIVES AND SUM OF NEGATIVES
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let countofPositives = input.filter((n) => n > 0 && n !== 0).length;
  let countofNegatives = input
    .filter((n) => n < 0 && n !== 0)
    .reduce((acc, curr) => acc + curr, 0);
  return [countofPositives, countofNegatives];
}
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
// STRINGS WITH VALUES ON ALPHABET
function high(words) {
  const alp = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  // Split the string into an array of words
  const wordArray = words.split(" ");

  // Sort the words by score and return the highest scoring one
  return wordArray.sort((a, b) => {
    const getScore = (word) =>
      word
        .split("")
        .reduce((score, char) => score + char.charCodeAt(0) - 96, 0);
    return getScore(b) - getScore(a);
  })[0];
}
console.log(high("Lara is the just world"));
// FIND THE UNIQUE NUMBER
function findUniq(arr) {
  // let uniqueNumber = 0;
  // let numbersCount = {};
  // for (let i = 0; i < arr.length; i++) {
  //   if (numbersCount[arr[i]]) {
  //     numbersCount[arr[i]]++;
  //   } else {
  //     numbersCount[arr[i]] = 1;
  //   }
  // }
  // for (let num in numbersCount) {
  //   if (numbersCount[num] === 1) {
  //     uniqueNumber = Number(num);
  //     break;
  //   }
  // }
  // return numbersCount;
  return Number(arr.filter((val) => arr.indexOf(val) == arr.lastIndexOf(val)));
}
console.log(findUniq([13, 3, 6, 6, 1, 10, 10, 1, 1, 2, 2, 1, 3, 3, 1]));

// TAKE THE DERIVATIVE
function derive(coefficient, exponent) {
  const prod = coefficient * exponent;
  return `${prod}x^${exponent - 1}`;
}
console.log(derive(5, 9));
// REVERSED STRING
function reverse(str) {
  return [...str].reverse().join("");
}
console.log(reverse("lara marie"));
//FIND THE NEEDLE AT WHAT INDEX
function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}
console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
// GET CHAR FROM ASCII VALUE
function getChar(c) {
  return String.fromCharCode(c);
}
console.log(getChar(65));
// LOOK FOR A TAIL
function correctTail(body, tail) {
  return body.slice(-1) === tail;
}
console.log(correctTail("Fox", "x"));
// REPEAT THE STRING
function repeatStr(n, s) {
  return s.repeat(n);
}
console.log(repeatStr(5, "dan"));
// VOLUME OF CUBOID
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width + height;
  }
}
// MERGE TWO SORTED ARRAYS
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2]
    .sort((a, d) => a - d)
    .filter((value, index, self) => self.indexOf(value) === index);
}
console.log(
  mergeArrays(
    ["lara", 1, 1, 1, 0, -1, 2, 2, 3, 3, 4, 5, ["dan", "lara"]],
    [6, 7, 8, 9, 10]
  )
);
// BLUE AND RED MARBLES
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const blue = blueStart - bluePulled;
  const red = redStart - redPulled;
  return blue / (blue + red);
}
console.log(guessBlue(5, 5, 2, 3));
// ALTERNATE THE STRING CASE
String.prototype.toAlternatingCase = function () {
  let newString = "";
  for (const char of this) {
    if (char === char.toUpperCase()) {
      newString += char.toLowerCase();
    } else {
      newString += char.toUpperCase();
    }
  }
  return newString;
};
// 46 - LAST
