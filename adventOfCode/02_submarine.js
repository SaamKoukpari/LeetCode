const [ depth ] = require('./data')


const slidingWindowSum = function(array) {
  //determine how to divide 2000 elements (input array from data.js) into groups of 3
  const windows = new Array(2000)
  .fill('')
  .map((_, i) => array.slice(i * 1, (i + 3) * 1))
  //now we have array of all our windows
  //time to return the sum of each window 
  let windowSums = windows
  .map(arr => arr.reduce((sum, item) => sum += item, 0));
  //now we can compare each element and record the number of times the elements increase
  let increase = 0;
  
  for (let i = 1; i < windowSums.length; i++) {
    if (windowSums[i + 1] > windowSums[i]) {
      increase += 1;
    }
  }
  return increase
}

console.log(slidingWindowSum(depth));