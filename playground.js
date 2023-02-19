// simulate the code here... || sandbox
console.log("PLAYGROUND HERE:::::");
function selReverse(array, length) {
  let newArr = [];
  for (let i = 0; i < array.length; i += length) {
    console.log("every iteration", i + length);
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
