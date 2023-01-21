// find all the prime numbers less than equal to k
// 1 is not a prime number
// naive solution run a loop from 2 to n and check if a number is prime
// to find a number if it is prime or not complexity is O(sqrt(n))

// to solve this problem the optimized solution is to make an array of size n+1 and initilaize it with true
// now start from 2 and make all its multiples false as they are not prime now go for next number that is false and mark all its multiples as false and so on in the end return numbers that are marked true
// Sieve of Eratosthenes
function primesBeforeK(k) {
  let nums = new Array(k + 1).fill(false);
  let ans = [];
  for (let i = 2; i * i < k; i++) {
    if (!nums[i]) {
      for (let j = i + i; j <= k; j += i) {
        nums[j] = true;
      }
    }
  }
  for (let i = 2; i < nums.length; i++) {
    if (!nums[i]) {
      ans.push(i);
    }
  }
  return ans;
}

console.log(primesBeforeK(10));
//
