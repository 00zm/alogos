// https://leetcode.com/problems/valid-anagram/
// unoptimized solution
// const isAnagram = function (s, t) {
//   // t should have all chars of s
//   if (s.length !== t.length) {
//     return false;
//   }
//   for (let i = 0; i < s.length; i++) {
//     let idx = t.indexOf(s[i]);
//     if (idx === -1) {
//       return false;
//     } else {
//       t = t.substring(0, idx) + t.substring(idx + 1, t.length);
//     }
//   }
//   return true;
// };

console.log(isAnagram("anagram", "nagaram"));

// function isAnagram(s, t) {
//   //   // t should have all chars of s

//   // create an object of char of t
//   let charMap = {};
//   for (let i = 0; i < t.length; i++) {
//     if (charMap[t[i]]) {
//       charMap[t[i]].push(i);
//     } else {
//       charMap[t[i]] = [i];
//     }
//   }
//   for (let j = 0; j < s.length; j++) {
//     if (Array.isArray(charMap[s[j]]) && charMap[s[j]].length > 0) {
//       charMap[s[j]].pop();
//     } else {
//       return false;
//     }
//   }
//   for (const key in charMap) {
//     if (charMap[key].length > 0) {
//       return false;
//     }
//     console.log(key);
//   }
//   return true;
// }

// another efficeint solution
// add all chars 0f s in map for t decrement chars if you hit negative value return false

function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let count = {};
  for (let i = 0; i < s.length; i++) {
    count[s[i]] = (count[s[i]] || 0) + 1;
  }
  console.log(count);
  for (let j = 0; j < t.length; j++) {
    if (count[t[j]]) {
      count[t[j]]--;
      if (count[t[j]] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
