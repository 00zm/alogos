// minimum operations to reduce x to zero.
// leetcode 1658
// dynamic solution at each step you have a choice to either take left most or right most
// return their minimum
// will give TLE(time limit exceed on leetcode)
const nums = [1, 1, 1, 1, 1, 1, 3];
const x = 5;
let count = 0;
const minOperations = function (
  nums,
  x,
  steps = 0,
  mem = {},
  l = 0,
  r = nums.length - 1
) {
  let steps1 = -1;
  let steps2 = -1;
  let ans = -1;
  let ansKey = `${l},${r},${x}`;
  if (ansKey in mem) {
    return mem[ansKey];
  }
  if (x == 0) {
    mem[ansKey] = steps;
    return steps;
  }
  if (x < 0 || l > r) {
    mem[ansKey] = -1;
    return -1;
  }

  if (nums[l] > x && nums[r] > x) {
    mem[ansKey] = -1;
    return -1;
  }
  count++;
  steps1 = minOperations(nums, x - nums[l], steps + 1, mem, l + 1, r);
  steps2 = minOperations(nums, x - nums[r], steps + 1, mem, l, r - 1);

  if (steps1 != -1 && steps2 != -1) {
    ans = Math.min(steps1, steps2);
  } else if (steps1 != -1 || steps2 != -1) {
    ans = steps1 == -1 ? steps2 : steps1;
  } else {
    ans = -1;
  }

  mem[ansKey] = ans;

  return ans;
};
console.log(minOperations(nums, x));
console.log({ count }, nums.length);
