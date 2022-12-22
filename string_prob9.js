// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// kmp is efficient solution
// http://jakeboxer.com/blog/2009/12/13/the-knuth-morris-pratt-algorithm-in-my-own-words/
// https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
// brute force solution
var strStr = function (haystack, needle) {
  let chars = {};
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      if (haystack.substring(i, i + needle.length + 1) == needle) {
        return i;
      }
    }
  }
  return -1;
};

console.log(strStr("hello", "ll"));
