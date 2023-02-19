// simulate the code here... || sandbox

function selReverse(array, length) {
  let newArr = [];
  for (let i = 0; i < array.length; i += length) {
    console.log("every iteration", i + length);
    let curr = array.slice(i, i + length);
    newArr.push(...curr.reverse());
  }
  return newArr;
}

console.log(selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3)); // [6,4,2,8,10,12,14,16]
// selReverse([2, 4, 6, 8, 10, 12, 14, 16], 3);
// selReverse(
//   [
//     { name: "Alice", age: 28, gender: "female" },
//     { name: "Bob", age: 35, gender: "male" },
//     { name: "Charlie", age: 42, gender: "male" },
//   ],
//   2
// );

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
console.log(res);
