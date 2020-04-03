function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let elementToCheck = arr[i];
    let previousIndex = i - 1;
    while (previousIndex => 0) {
      if (elementToCheck < arr[previousIndex]) {
        arr[previousIndex + 1] = arr[previousIndex];
        arr[previousIndex] = elementToCheck;
        previousIndex = previousIndex - 1;
      } else {
        break;
      }
    }
  }
}

let array = [7, 1, 3, 5, 9, 2, 3];
insertionSort(array);
console.log(array);
