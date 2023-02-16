// Bubble sort
// compare the adjacent element in the aray and swap the position to an intended order  asc | desc

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

// DESCENDING;
function sortDescending(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        // ex 100 < 99
        // it will yield false value
        let temp = arr[i]; // temp = 100
        arr[i] = arr[i + 1]; // arr[i] = 99
        arr[i + 1] = temp; // arr[i + 1] = 100 => so temp value now will be 100
        swapped = true; // then next iteration will be done
      }
    }
  } while (swapped);
}
let arr2 = [100, 59, 88, 57, 102, 33];
console.log("random", arr2);
sortDescending(arr2);
console.log("descending ", arr2);
