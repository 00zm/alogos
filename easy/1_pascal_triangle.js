// https://leetcode.com/problems/pascals-triangle-ii/
// to find the ith index in current row add the ith and i-1 element in previous row
// the number of elements in each row is equal to the row number

var getRow = function (rowIndex) {
  let rows = [];
  for (let i = 0; i <= rowIndex; i++) {
    let row = [];
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        row.push(1);
      } else {
        row.push(rows[i - 1][j] + rows[i - 1][j - 1]);
      }
    }
    rows.push(row);
  }
  console.log(rows);
  return rows.at(-1);
};
