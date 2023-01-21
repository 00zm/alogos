// find all duplicate in an array the elemnts are in the range 1 to n n is length of array
// solution should be o(n) time and o(1) space
// sol
// since range is 1 to n so all elments represent a valid index
// so iterate array and treat elments at index i  to calculate an index and put a negative there
// the numbers that are repeated in the array will be visited twice so before putting negative at calculted value check if negative is already present if so then add that to ans;

let nums = [1, 2, 2, 5, 4]; // ans = [2]

function duplicate(nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1;
    if (nums[idx] < 0) {
      //index visited before
      ans.push(Math.abs(nums[i]));
    } else {
      //index visited first time
      nums[idx] = -nums[idx];
      console.log("here", nums, idx);
    }
  }
  console.log(nums);
  return ans;
}
console.log(duplicate(nums));
