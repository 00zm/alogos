// minimum operations to reduce x to zero.
// leetcode 1658
// [a,b,c,d,e,f]    if a+b+f = x  sum = a+b+c+d+e+f
// then problem can be reworded that subarray  (sum-x) needs to be maximized
// bcoz if size of sum-x is maximized then elements that are used to form x i.e. boundary elemets will be minimized which is required

const minOperations = function (nums, x) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let subArrSum = sum - x;
  let size = -1;
  let i = 0;
  let currSum = 0;
  let j = 0;
  console.log({ sum, subArrSum });
  if (sum == x) {
    return nums.length;
  }
  while (j < nums.length) {
    currSum += nums[j];
    if (currSum > subArrSum) {
      while (currSum > subArrSum && i < j) {
        currSum -= nums[i];
        i++;
      }
    }
    if (currSum == subArrSum) {
      size = Math.max(j - i + 1, size);
    }
    j++;
  }

  if (size == -1) {
    return -1;
  } else {
    return nums.length - size;
  }
};

const nums = [1, 1, 1, 1, 1, 1, 3];
const x = 5;
console.log(minSteps(nums, x));
