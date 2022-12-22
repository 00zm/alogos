const findTheDifference = function (s, t) {
  const extraEls = t.split("");
  for (let i = 0; i < s.length; i++) {
    let index = t.indexOf(s[i]);
    t = t.slice(0, index) + t.slice(index + 1, t.length);
  }
  return t;
};

console.log(findTheDifference("abcd", "abcde"));
