const vowelCount = function (str) {
  let vowelMap = new Map();
  str = str.toLowerCase();
  let char;
  for (char of str) {
    if ("aeiou".includes(char)) {
      if (vowelMap.has(char)) {
        vowelMap.set(char, vowelMap.get(char) + 1);
      } else {
        vowelMap.set(char, 1);
      }
    }
  }
  return vowelMap;
};
