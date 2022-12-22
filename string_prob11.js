const checkString = function (s) {
  let seenB = false;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "b") {
      seenB = true;
    }
    if (seenB && s.charAt(i) === "a") {
      return false;
    }
  }
  return true;
};
