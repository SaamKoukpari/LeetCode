const [ depth ] = require('./data')


const depthCounter = function(array) {
  let increase = 0
  
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] > array[i]) {
      increase += 1
    }
  }
  return increase
}

console.log(depthCounter(depth))