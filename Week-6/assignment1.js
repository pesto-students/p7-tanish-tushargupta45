function maxSubArray(nums) {
  let maxNum = nums[0];
  let currentMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxNum = Math.max(currentMax, maxNum);
  }
  return maxNum;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubArray(arr);
