// leetcode 767
// s = 'aab' o = 'aba'
// s = 'aaab' o=''

function rearrange(str) {
  const list = str.split("");
  let newStr = "";
  for (let i = 0; i < list.length; i++) {
    if (newStr.slice(-1) !== list[0]) {
      newStr += list[i];
      list.shift();
    }
  }
  if (list.length !== newStr.length) {
    return newStr;
  }

  return "";
}

console.log(rearrange("aab"));
