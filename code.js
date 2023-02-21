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
  return a.length < b.length ? a + b + a : b + a + b;
}
console.log(solution("lara", "dan"));
