//Given the string, check if it is a palindrome.

function solution(inputString) {
  let reverse = inputString.split('').reverse().join('');
  if (inputString === reverse) {
      return true
  }
  else {
      return false
  }
}