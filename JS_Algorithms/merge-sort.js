console.log("MERGE - SORT");
// DIVIDE the array into sub-arrays
[-6, 20, 8, -2, 4];
// until there is only one element
[-6, 20] || [8, -2, 4];
[-6][20] || [8] || [-2, 4];
[-6] || [20] || [8] || [-2] || [4];
// merge the individual subarrays while ensuring the element is sorted
// compare the first and pusht to temp aray

// SOLUTION
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
const arr = [-6, 20, 8, -2, 4];
console.log(mergeSort(arr));
