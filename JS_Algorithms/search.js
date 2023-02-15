// Search Algo
// Linear Search

let nums = [3, 6, 10, 23, 100];
function search(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return `You are looking for ${arr[i]} and its index is ${i}`;
    }
  }
  return "NO element found";
}
console.log(search(nums, -2));

// Binary Search
let nums2 = [3, 6, 10, 23, 100];
function binarySearch(a, t) {
  let leftIndex = 0;
  let rightIndex = a.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === a[middleIndex]) {
      // return `${a[middleIndex]} is in a middleIndex`;
      return middleIndex;
    }
    if (t < a[middleIndex]) {
      return (rightIndex = middleIndex - 1);
    } else {
      return (leftIndex = middleIndex + 1);
    }
  }
  return "Not Found";
}
console.log(binarySearch([3, 6, 10, 23, 100], 100));
console.log(binarySearch([3, 6, 10, 23, 100], 100));
