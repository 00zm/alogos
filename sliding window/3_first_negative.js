// first negative integer in every window of size k
// number of windows is equal to arraysize-k+1

// only shift index negative number if it is not valid for next window
const firstNegative = (arr, k) => {
  let i = 0;
  let j = 0;
  let ans = [];
  let nums = [];
  while (j < arr.length) {
    if (arr[j] < 0) {
      ans.push(j);
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      if (ans.length > 0) {
        nums.push(arr[ans[0]]);
      }
      i++;
      j++;
      if (ans.length > 0 && ans[0] >= i && ans[0] <= j) {
        continue;
      } else {
        ans.shift();
      }
    }
  }
  return nums;
};
// brute force solution
// doing repitive work
// [1,-1,3,4,5,6]
// e.g in first window checked 1,-1,3 in second window again checking -1,3,4
const firstNegativeBrute = (arr, k) => {
  let ans = [];
  for (let i = 0; i <= arr.length - k; i++) {
    for (let j = i; j < i + k; j++) {
      if (arr[j] < 0) {
        ans.push(arr[j]);
        break;
      }
    }
  }
  return ans;
};

let arr = [-1, -5, 6, 7, -4, 1];
let k = 3;

console.log(firstNegative([12, -1, -7, 8, -15, 30, 16, 28], 3));
console.log(firstNegativeBrute([12, -1, -7, 8, -15, 30, 16, 28], 3));
