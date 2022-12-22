// should be solved using back tracking
// backtracking is when you have to make a choice in this case between ( and )
// if string length is 2n add and return
// first char should be ( seond char can be ( or ), add ) if more ( more than ) i.e add closing char only when opening char are more than closing char
// dont add anymore more open chars if number of open chars is n

const generateParenthesis = function (n) {
  let ans = [];
  const generate = (str, l, r) => {
    if (str.length == 2 * n) {
      ans.push(str);
      return;
    }
    if (l < n) {
      generate(str + "(", l + 1, r);
    }
    if (r < l) {
      generate(str + ")", l, r + 1);
    }
  };
  generate("", 0, 0);
  return ans;
};
console.log(generateParenthesis(3));
