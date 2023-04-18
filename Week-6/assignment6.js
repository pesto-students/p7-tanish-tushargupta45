function threesum(arr, target) {
  arr = arr.sort((a, b) => a - b);
  const arr2 = arr.map((el) => Math.abs(el * 3 - target));
  const nearest = Math.min(...arr2);
  const nearestElementIndex = arr2.findIndex((el) => el === nearest);
  let rightIndex = nearestElementIndex - 1;
  let leftIndex = nearestElementIndex + 1;

  while (leftIndex > 0 && rightIndex < arr.length - 1) {
    console.log(arr[leftIndex] + arr[nearestElementIndex] + arr[rightIndex]);
    if (arr[leftIndex] + arr[nearestElementIndex] + arr[rightIndex] > target) {
      leftIndex--;
      continue;
    } else if (
      arr[leftIndex] + arr[nearestElementIndex] + arr[rightIndex] <
      target
    ) {
      rightIndex++;
      continue;
    } else {
      return arr[leftIndex] + arr[nearestElementIndex] + arr[rightIndex];
    }
  }
  return (
    arr[nearestElementIndex] +
    arr[nearestElementIndex - 1] +
    arr[nearestElementIndex + 1]
  );
}

const a = [1, 2, -1, -4];
threesum(a, 1);
