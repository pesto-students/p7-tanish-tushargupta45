const hasDuplicate = function (arr) {
  let setArray = new Set(arr);
  return setArray.size !== arr.length;
};

console.log(hasDuplicate([1, 2, 4, 3, 5]));
