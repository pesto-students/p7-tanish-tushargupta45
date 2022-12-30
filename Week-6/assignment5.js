function getPair(arr, diff) {
  arr = arr.sort((a, b) => a - b);
  for (i = 0; i < arr.length - 1; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] === diff) {
        console.log(i, j);
        return 1;
      }
    }
  }
  return 0;
}
const inputArray = [5, 10, 3, 2, 50, 80];
getPair(inputArray, 1);
