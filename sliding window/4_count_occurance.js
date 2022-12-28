// coount occurances of anagrams of string1 in string2
// anagram means it can be jumbled in any order but letters should be same in same quantity
// no of anagrams for 'abc' is 3! because first space can be filled  3 options then 2 then 1 which is 3!
// brute force solution genrate all anagrams and then search in the string  but to generate anagrams n! is  worst complexity

// steps make an object of window string or small string e.g abaa and also keep count of distinct elements
//  abaa becomes {a:3,b:1,count2}
// now i,j = 0 start moving and decrementing from obj
// and if for any elemnt value is zero decrement the count
// once you are at window size you have to find one ans
// if count is zero you have found an anagram increment your anagram counter else don't increment in both cases slide the  window
// when sliding the window the element on left (going out)  is incremented and element on right (coming in)  is incremented and count is updated accordingly
// the logic for sliding part is as follows once you are at the window you have to undo the calculation of the element going out even if it is anagram or not so calculation was decrement so now you increment that element
// for the element coming into window the calulation is decrement so you do that

// keeping count of distict letters helps that once you are at the window size you dont have to iterate the object of count completly just looking at the count tells you if all chars have been removed from object
// count donates distinct elements

// a way to simplify the solution is to not consider the elements that are not part of pattern when traversing
// currently those elements are dicremented irrespective
// also if this soluion is considered then when undoing changes for i pointer when sliding the window make sure the element is in pattern

const countAnagrams = (str, pattern) => {
  let countObj = { count: 0 };
  let anagrams = 0;
  for (let i of pattern) {
    if (i in countObj) {
      countObj[i]++;
    } else {
      countObj[i] = 1;
      countObj.count++;
    }
  }
  console.log(countObj);
  let i = 0;
  let j = 0;

  while (j < str.length) {
    if (str.at(j) in countObj) {
      countObj[str.at(j)]--;

      if (countObj[str.at(j)] == 0) {
        countObj.count--;
      }
      if (countObj[str.at(j)] == -1) {
        countObj.count++;
      }
    } else {
      countObj[str.at(j)] = -1;
      countObj.count++;
    }
    if (j - i + 1 < pattern.length) {
      j++;
    } else if (j - i + 1 == pattern.length) {
      if (countObj.count == 0) {
        anagrams++;
      }
      countObj[str.at(i)]++;
      if (countObj[str.at(i)] == 1) {
        countObj.count++;
      }
      if (countObj[str.at(i)] == 0) {
        countObj.count--;
      }
      i++;
      j++;
    }
  }

  return anagrams;
};

let str = "abczzabczbca";
let pattern = "abc";

console.log(countAnagrams(str, pattern));
