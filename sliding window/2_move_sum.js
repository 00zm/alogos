// move sum sub array of size k
// arr = [2,5,1,8,2,9,1] size =7 window size 3
// return the maximum of sum of all subarrays of size k
// identify question of array or string asking subarray or substring, window size given or conditon given
// not 100% but atleast think about sliding window
// window start inclusive
// window end inclusive window size i-j+1
//   take i,j as 0 and calculate window size if less than k (required window size then increment j)
//   once you hit required window size you have to maintain it; so include one item from right and exclude one item from left so i++ , j++
const maxSubarray = (arr, k) => {
  let max = Number.MIN_VALUE;
  let i = 0;
  let j = 0;

  let sum = 0;
  while (j < arr.length) {
    sum = sum + arr[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      console.log({ sum });
      max = Math.max(sum, max);
      sum = sum - arr[i];
      i++;
      j++;
    }
  }
  return max;
};

let arr = [3, 4, 5, 6, 7];
console.log(maxSubarray(arr, 3));
