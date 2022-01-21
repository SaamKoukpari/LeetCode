//Ralph got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function solution(statues) {
  //find largest number in array
  let max = Math.max(...statues)
  //find smallest number in array
  let min = Math.min(...statues)
  //find array length
  let sequence = statues.length
  //determine gaps greater than 1 
  return max - min + 1 - sequence
}