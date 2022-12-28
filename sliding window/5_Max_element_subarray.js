// given an array of integers return the maximum element of each subarray  of size k
// [5,6,-1,2,3],k=3 => [6,6,3]

const maxElements = (arr, k) => {
  let i = 0;
  let j = 0;
  let max = Number.MIN_VALUE;
  let secondMax = Number.MIN_VALUE;
  let ans = [];

  while (j < arr.length) {
    max = Math.max(max, arr[j]);
    if (arr[j] < max) {
      secondMax = Math.max(secondMax, arr[j]);
    }
    if (j - i + 1 < k) {
      console.log("here1");
      j++;
    } else if (j - i + 1 == k) {
      console.log("here2");
      ans.push(max);
      if (max == arr[i]) {
        max = secondMax;
      }
      i++;
      j++;
    }
  }
  return ans;
};

console.log(maxElements([5, 6, -1, 2, 3], 3));
