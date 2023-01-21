// leetcode 1539
// find the kth missing element
// [1,4,5] k=2 missing = [2,3] ans = 3
// [1,2,3] k=2 missing = [4,5] ans = 5
// at any position number of  missing number is n-length of elements before current index so in case 1 numbers missing before 4 are 4-(l) = 4-1 = 3 . for 5 it is 5-2 = 3

// o(n)
const kMissing = (nums, k) => {
  // if missing numbers at the start are greater than k then k'th missing number will be k
  //   [5,6,7,10] k=3 ans = 3
  //   in other case start with assumption missing number as k but every time a number in array is smaller than k then increment k because one of the number is present and for k missing number you have to increment pointer for every number present to still get kth missing
  if (k < nums[0]) {
    return k;
  }
  let num = k;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= num) {
      num++;
    } else {
      break;
    }
  }
  return num;
};

// console.log(kMissing([1, 2, 3], 1));
//  O(n) 2nd approach
// [1,2,5,10] k=4 [3,4,6,7,8,9]
// i indicates the count of  numbers present in array
// so when my number of missing number reaches k i want to offset that with i
const kMissing1 = (nums, k) => {
  let i = 0;
  while (i < nums.length && nums[i] - i + 1 < k) {
    i++;
  }
  return i + k;
};
// second solution can be converted to O(log n ) using binary search

const kMissingBinary = (nums, k) => {
  let lo = 0;
  let hi = nums.length - 1;
  while (lo < hi) {
    let mid = Math.floor((lo + hi) / 2);
    console.log({ mid, lo, hi });
    if (nums[mid] - (mid + 1) < k) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return lo + k + 1;
};

console.log(kMissingBinary([1, 2, 5], 2));
