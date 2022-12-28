// given an array and a sum value is there a subset in array that sum's to given sum
// subset can be non-continuous
// initial case 1st col is true sum of zero can be formed no matter the number of elements in array

let arr = [5, 1, 3];
let sum = 6;

const isSum = (arr, sum) => {
  let i = arr.length;
  let j = sum;
  let matrix = Array(i + 1)
    .fill(-1)
    .map((r) => Array(j + 1).fill(null));

  for (let row = 0; row < i + 1; row++) {
    for (let col = 0; col < j + 1; col++) {
      // arr elements are zero but sum is not zero
      if (row == 0 && col != 0) {
        matrix[row][col] = false;
      }
      //   sum is zero
      if (col == 0) {
        matrix[row][col] = true;
      }
    }
  }
  for (let row = 1; row < i + 1; row++) {
    for (let col = 1; col < j + 1; col++) {
      if (arr[row - 1] <= col) {
        matrix[row][col] =
          matrix[row - 1][col - arr[row - 1]] || matrix[row - 1][col];
      } else {
        matrix[row][col] = matrix[row - 1][col];
      }
    }
  }
  return matrix[i][j];
};

// console.log(isSum(arr, sum));

module.exports = isSum;
