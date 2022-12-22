// https://leetcode.com/problems/add-binary/
// 0+1 = 1 , 1+1 = 01  1+1+1 = 11
// 0+0+0  0+0+1=1  1+0+1=10  1+0+1 1+1+1= 11
// '110' '11'
//   11
const addBinary = function (a, b) {
  let ans = "";
  let len = a.length > b.length ? a.length : b.length;
  a = a.split("").reverse().join("");
  b = b.split("").reverse().join("");
  let c = 0;
  let idx = 0;
  while (idx !== len) {
    let charA = a.charAt(idx) == "" ? 0 : a.charAt(idx);
    let charB = b.charAt(idx) == "" ? 0 : b.charAt(idx);
    let res = parseInt(charA) + parseInt(charB) + c;
    ans = ans + (res % 2);
    c = parseInt(res / 2);
    idx++;
  }
  if (c === 1) ans = ans + c;
  return ans.split("").reverse().join("");
};

console.log(addBinary("11", "1"));
