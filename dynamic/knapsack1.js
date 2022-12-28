// knapsack top down approach
// recursive can be converted to top down
// make a matrix of m[w+1][n+1] w=capacity , n=values/weights length
let wArr = [1, 2, 3, 4];
let vArr = [20, 10, 30, 40];
let w = 6;
// m[4+1][7+1]
// the base condition of recursive in the first column and first row of matrix which is unused
// [[],
//  [],
//  [],
//  [],
//  [],]

const maxProfit = (weigthArr, valueArr, weight) => {
  let i = weight + 1;
  let j = weigthArr.length + 1;
  let matrix = Array(j)
    .fill(-1)
    .map((row) => Array(i).fill(-1));
  for (let row = 0; row < j; row++) {
    for (let col = 0; col < i; col++) {
      if (row == 0 || col == 0) {
        matrix[row][col] = 0;
      }
    }
  }
  for (let row = 1; row < j; row++) {
    for (let col = 1; col < i; col++) {
      if (weigthArr[row - 1] <= col) {
        matrix[row][col] = Math.max(
          valueArr[row - 1] + matrix[row - 1][col - weigthArr[row - 1]],
          matrix[row - 1][col]
        );
      } else {
        matrix[row][col] = matrix[row - 1][col];
      }
    }
  }
  console.log(matrix);
  return matrix[j - 1][i - 1];
};

console.log(maxProfit(wArr, vArr, w));
