// ASCENDING
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
let arr = [4, 20, -10, 0, -1];
console.log("random", arr);
bubbleSort(arr);
console.log("ascending", arr);

DESCENDING
function sortDescending(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        // it will yield false value
        let temp = arr[i];

        swapped = true;
      }
    }
  } while (swapped);

let arr2 = [100, 59, 88, 57, 102, 33];
console.log("before", arr2);
sortDescending(arr2);
console.log("after ", arr2);

// Bubble sort
// compare the adjacent element in the aray and swap the position to an intended order  asc | desc
