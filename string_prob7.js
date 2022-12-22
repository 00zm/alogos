// https://leetcode.com/problems/integer-to-roman/

const intToRoman = function (num) {
  let ans = "";
  const numerals = {
    1: "I",
    4: "IV",
    5: "V",
    10: "X",
    9: "IX",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  while (num > 0) {
    while (num >= 1000) {
      ans = ans + numerals[1000];
      num = num - 1000;
    }

    while (num >= 900) {
      ans = ans + numerals[900];
      num = num - 900;
    }
    while (num >= 500) {
      ans = ans + numerals[500];
      num = num - 500;
    }
    while (num >= 400) {
      ans = ans + numerals[400];
      num = num - 400;
    }
    while (num >= 100) {
      ans = ans + numerals[100];
      num = num - 100;
    }
    while (num >= 90) {
      ans = ans + numerals[90];
      num = num - 90;
    }
    while (num >= 50) {
      ans = ans + numerals[50];
      num = num - 50;
    }
    while (num >= 40) {
      ans = ans + numerals[40];
      num = num - 40;
    }
    while (num >= 10) {
      ans = ans + numerals[10];
      num = num - 10;
    }
    while (num >= 9) {
      ans = ans + numerals[9];
      num = num - 9;
    }
    while (num >= 5) {
      ans = ans + numerals[5];
      num = num - 5;
    }
    while (num >= 4) {
      ans = ans + numerals[4];
      num = num - 4;
    }
    while (num >= 1) {
      ans = ans + numerals[1];
      num = num - 1;
    }
  }

  return ans;
};

console.log(intToRoman(1994));
