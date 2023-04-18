var findJudge = function (n, trust) {
  let arr = new Array(n).fill(0);
  let count = new Array(n).fill(0);
  for (let [x, y] of trust) {
    arr[x - 1] = 1;
    count[y - 1]++;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0 && count[i] == n - 1) {
      //self trust = 0, other's trust = length-1
      return i + 1;
    }
  }
  return -1;
};
