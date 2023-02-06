// leetcode 198
// https://leetcode.com/problems/house-robber/description/

// recursive solution
// exponential time complexity
// at each step you have two choices either include current element or exclude it
// if you inculde current then move 2 step forward because cannot take consective values
// if exclude move one step forward
// add base case if pointer goes out of bound

// var rob = function (nums, pointer = 0, sum = 0, obj = {}) {
//   if (pointer >= nums.length) return sum;
//   let key = `${pointer}-${sum}`;
//   if (key in obj) return obj[key];
//   let a1 = rob(nums, pointer + 2, sum + nums[pointer], obj);
//   let a2 = rob(nums, pointer + 1, sum, obj);
//   obj[key] = Math.max(a1, a2);
//   return obj[key];
// };

// tabulation solution
// step1 initialize array/matrix
// step2 add base case if only one element in array then that element is returned
// step3 add loop and replace recursive calls by a lookup
// return ans
var rob = function (nums, pointer = 0, sum = 0, obj = {}) {
  if (nums.length == 1) return nums;
  return tabulation(nums);
};

function tabulation(nums) {
  let dp = Array(nums.length);
  dp[0] = nums[0];
  dp[1] = nums[1];
  for (let i = 1; i < nums.length; i++) {
    let a1 = (i > 1 && dp[i - 2]) + nums[i];
    let a2 = dp[i - 1];
    dp[i] = Math.max(a1, a2);
  }
  return dp.at(-1);
}
