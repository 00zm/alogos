// count number of subsets in arr that add upto given sum
// Input: arr[] = {1, 2, 3, 3}, X = 6
// Output: 3
// All the possible subsets are {1, 2, 3},
// {1, 2, 3} and {3, 3}

const countSubset = (arr, sum) => {
  const i = arr.length;
  const j = sum;
  let matrix = Array(i + 1)
    .fill(-1)
    .map((r) => Array(j + 1));
  for (let row = 0; row < i + 1; row++) {
    for (let col = 0; col < j + 1; col++) {
      if (row == 0) {
        matrix[row][col] = 0;
      }
      if (col == 0) {
        matrix[row][col] = 1;
      }
    }
  }
  console.log(matrix);
  for (let row = 1; row < i + 1; row++) {
    for (let col = 1; col < j + 1; col++) {
      if (arr[row - 1] <= col) {
        matrix[row][col] =
          matrix[row - 1][col - arr[row - 1]] + matrix[row - 1][col];
      } else {
        matrix[row][col] = matrix[row - 1][col];
      }
    }
  }
  console.log(matrix);
  return matrix[i][j];
};

console.log(countSubset([2, 3, 5, 4, 1], 5));
