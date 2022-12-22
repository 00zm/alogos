// https://leetcode.com/problems/reverse-vowels-of-a-string/

function reverseVowels(s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let j = s.length;
  let i = 0;
  while (i < j) {
    let isIVowel = vowels.has(s[i]);
    let isJVowel = vowels.has(s[j]);
    if (isIVowel && isJVowel) {
      s = `${s.substring(0, i)}${s[j]}${s.substring(i + 1, j)}${
        s[i]
      }${s.substring(j + 1, s.length)} `;
      i++;
      j--;
    }
    if (isIVowel && !isJVowel) {
      j--;
    }
    if (!isIVowel && isJVowel) {
      i++;
    }
    if (!isIVowel && !isJVowel) {
      i++;
      j--;
    }
  }
  return s;
}

console.log(reverseVowels("leetcode"));
