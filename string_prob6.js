// https://leetcode.com/problems/group-anagrams/description/

// const groupAnagrams = function (strs) {
//   let sortedStrs = strs.map((s) => s.split("").sort().join());
//   let arrayOfSets = [];
//   let grouped = new Set();
//   for (let i = 0; i < strs.length; i++) {
//     let individualSet = new Set();
//     individualSet.add(i);
//     if (grouped.has(i)) {
//       continue;
//     }
//     for (let j = 0; j < strs.length; j++) {
//       if (i !== j && sortedStrs[i] == sortedStrs[j]) {
//         individualSet.add(j);
//         grouped.add(j);
//       }
//     }
//     arrayOfSets.push(individualSet);
//   }
//   console.log(arrayOfSets);
// };
const groupAnagrams = function (strs) {
  let sortedStrs = strs.map((s) => s.split("").sort().join(""));
  let ans = [];
  let grouped = {};
  for (let i = 0; i < strs.length; i++) {
    if (grouped[sortedStrs[i]]) {
      grouped[sortedStrs[i]].push(i);
    } else {
      grouped[sortedStrs[i]] = [i];
    }
  }
  for (let key in grouped) {
    let oneArr = [];
    grouped[key].forEach((id) => {
      oneArr.push(strs[id]);
    });
    ans.push(oneArr);
  }
  return ans;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

// to detect anagrams sorted strings should be same or another way of saying number of occurances of each character should be same in both strings
