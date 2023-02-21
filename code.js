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
