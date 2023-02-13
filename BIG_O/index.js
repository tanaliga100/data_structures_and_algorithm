function sumUp(a) {
  const res = (a / 2) * 1 + a;
  console.log(res);
}
sumUp(3);
sumUp(10);
sumUp(20);

function sumThis2(a) {
  let res = 0;
  for (let i = 0; i < a; i++) {
    console.log(`${res}`);
    const result = (res += a);
    console.log(result);
  }
}
sumThis2(10);
