//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const twoSum = function(nums, target) {
  const comp = [];
  //control for input
  if (!nums.length || !target) {
    return 'invalid input'
  }
  //check for target sum
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i]
    }
    comp[target - nums[i]] = i
  }
  //no existing sum in input array
  if (comp !== target) {
    return 'Error: nothing adds to target!'
  }
};

console.log(twoSum([1, 3, 5, 7], 9))
console.log(twoSum([1, 3, 5, 0], 3))
console.log(twoSum([1, 3, 5, 7], 6))
