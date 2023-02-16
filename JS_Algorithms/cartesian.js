console.log("CARTESIAN - PRODUCT");
const A = [1, 2];
const B = [3, 4];
// cartesian
AxB = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
];
const C = [1, 2];
const D = [3, 4, 5];
CxD = [[1, 3], [1, 4], [1, 5][(2, 3)], [2, 4], [2, 5]];

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
function cartesianProduct(arr1, arr2) {
  const res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log("arr1", arr1[i]);
      console.log("arr2", arr2[j]);
      res.push([arr1[i], arr2[j]]);
    }
  }
  return res;
}
console.log(cartesianProduct(arr1, arr2));
