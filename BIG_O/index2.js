function sumUp(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumUp(10));

function sumUp2(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumUp2(10));
