// https://leetcode.com/problems/is-subsequence/
const isSubsequence = function (s, t) {
  let oldIdx = 0;
  for (let i = 0; i < s.length; i++) {
    let idx = t.indexOf(s[i], oldIdx);
    if (idx === -1) {
      return false;
    }

    oldIdx = idx + 1;
  }
  return true;
};

console.log(isSubsequence("aaaaaa", "bbaaaa"));

// better solution go from left to right in T looking for character of s
// if found increment s and t otherwise increment t
// if all characters of s found return true else false
