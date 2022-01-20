//Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ""

const longestCommonPrefix = function(strs) {
  if (!strs.length) {
    return "";
  }
  for (let i = 0; i < strs[0].length; i++) {
    for (let char of strs) {
      if (char[i] !== strs[0][i]) {
        return char.slice(0, i);
      }
    }
  }
  return strs[0];
};

console.log(longestCommonPrefix(['lego', 'eggo', 'goegs']))

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])) //=> 'fl'


