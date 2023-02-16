console.log("QUICK SORT");
// Quick Sort
// identify the pivot element

function quickSort(arr) {
  // find the pivot element
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];

  // console.log("left", left);
  // console.log("pivot", pivot);
  // console.log("left", right);
}
let arr = [2, -5, 10, -3, 1];
const res = quickSort(arr);
console.log("random", arr);
console.log("asc", res);

// DESCENDING PATTERN
function descSort(arr) {
  // find the pivot
  if (arr.length < 2) {
    return arr;
  }
  let pivot1 = arr[arr.length - 1];
  let left1 = [];
  let right1 = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot1) {
      left1.push(arr[i]);
    } else {
      right1.push(arr[i]);
    }
  }
  // console.log("left", left1);
  // console.log("pivot", pivot1);
  // console.log("left", right1);
  return [...descSort(left1), pivot1, ...descSort(right1)];
}
let arr2 = [2, -5, 10, -3, 1];
const res2 = descSort(arr2);
console.log("random", arr2);
console.log("desc", descSort(arr2));
