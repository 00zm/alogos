// is it possible to divide the array into two equal sum subarrays
// make a partition such that sum is equal if formed return true else false
// if array contains only integers then its sum must be even to be divided in two equal parts if its sum is odd then the array cannot be divided into two equal sum parts
// if sum is even then you have to find a subarray equal to sum/2 the remaining part will also be sum/2 so question is reduced to subset sum question
const isSum = require("./subset_sum");

const isEqualSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum % 2 != 0) {
    return false;
  }
  return isSum(arr, sum / 2);
};
let arr = [1, 5, 7, 8, 9];
console.log(isEqualSum(arr));
