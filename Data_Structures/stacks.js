// STACKS
// functions: push, pop, peek, length

const { count } = require("console");

const letters = []; // can think of it as a stack
let words = "racecar";
let rword = "";

// let us push the letters into the letters array
for (let i = 0; i < words.length; i++) {
  letters.push(words[i]);
}
console.log("WORDS: " + letters);

// pop off the stack in reverse the order
for (let i = 0; i < words.length; i++) {
  rword += letters.pop();
}

console.log(rword);

// check if it is palindrome
if (words === rword) {
  console.log(words + "is a palindrome");
} else {
  console.log(words + " is not a palindrome");
}
