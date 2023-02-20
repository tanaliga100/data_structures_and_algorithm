// simulate the code here... || sandbox
console.log("PLAYGROUND HERE:::::");
function selReverse(array, length) {
  let newArr = [];
  for (let i = 0; i < array.length; i += length) {
    let curr = array.slice(i, i + length);
    newArr.push(...curr.reverse());
  }
  return newArr;
}
// console.log(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3)); // [6,4,2,8,10,12,14,16]

function isPangram(string) {
  string = string.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    if (string.indexOf(alphabet[i]) === -1) {
      return "Not a Pangram";
    }
  }
  return "yes ! its a pangram";
}
var string = "The quick brown fox jumps over the lazy dog.";
const res = isPangram(string);
// console.log(res);

function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let curr = arr[i];
    let next = arr[i + 1];
    if (curr + 1 !== next) {
      return `${next} is not the first consecutive element`;
    }
  }
}
const res1 = firstNonConsecutive([1, 2, 3, 5, 5, 6, 7, 23]);
// console.log(res1);

function noOddInteger(arr) {
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }
  return even;
}
const test = noOddInteger([1, 23, 54, 76, 12, 562]);
// console.log(test);

function createPhoneNumber(numbers) {
  let formattedNumber = "";
  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      formattedNumber += "(";
    } else if (i === 3) {
      formattedNumber += ") ";
    } else if (i === 6) {
      formattedNumber += "-";
    }
    formattedNumber += numbers[i];
  }
  return formattedNumber;
}
const asdasd = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// console.log(asdasd);

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = Math.floor(seconds % 60);

  const timeString = `${padZero(hours)}:${padZero(minutes)}:{padZero(
    remainingSeconds
  )}`;
  return timeString;
}
function padZero(num) {
  return num.toString().padStart(2, "0");
}
const adasd = humanReadable(59);
// console.log(adasd);

function validParentheses(parens) {
  let count = 0;

  for (let i = 0; i < parens.length; i++) {
    const char = parens[i];
    console.log(char);

    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;

      if (count < 0) {
        return false;
      }
    }
  }

  return count === 0;
}
// console.log(validParentheses("((()))"));

function towerBuilder(n) {
  let tower = [];
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const stars = "*".repeat(i * 2 - 1);
    console.log("stars");
    const row = spaces + stars + spaces;
    tower.push(row);
  }

  return tower;
}

console.log(towerBuilder(10));
