// return number of subarrays whose sum is qeual to k
// leetcode 560
// to solve keep a cumulative sum array,
// if current cumulative sum - k exists in old cumulative sum then count++

// similarly return number of subarrays whose sum is perfect square
// Perfect subarray | Google Kickstart 2020 | Round C | Q3
// case1 all positive integers
// https://www.youtube.com/watch?v=Lyay4WJwXyI
// this can be solved by keeping a cumulative sum of array
// if in sum array a value exists such that cs-j^2 then count can be incremented that means at some point sum became j^2 which is a perfect square of j
// keep a frequency map initilize it with 0 having frequency 1 for the edgge case that csum -
// j^2 is zero
// [3,4,5,4] csum = [3,7,12,16] csum-j^2 >= 0 for j to be ans when this condition becomes negative that means j being considered its square is greater than csum so it will not be found no matter how much j is increased beacasue it is continuously increasing more than csum
// so break condition
// j starts from 0 to 1 and keeps increasing till csum - j^2 is +ive
// cs = cummulative sum
// case 2 positive and negative integers
// condition changes cummulative sum - j^2 >= minimum value cumulative sum
