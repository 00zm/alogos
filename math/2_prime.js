// check if a number is prime
// a number is prime its divisers are only itself and 1
// prime numbers are 2, 3 , 5, 7 ...
// 2 is only even prime number
// 1 is neither prime nor composite
// naive solution is O(n)
// optimal  solution is O(sqrt(n))
// idea of optimization divisors always appear in pairs so divisors of 30 are (2,15), if you divide by 2 you get 15 if you divide by 15 you get 2
// x*y = n
// x * x <= n , x<y
// x < sqrt(n)
// so instead of going from 2 to n check for 2 to sqrt(n)
// so if there is a diviser y that is greater than sqrt(n) then it will have a pair x which is less than sqrt(n) so you will find it
const isPrime = (k) => {
  for (let i = 2; i * i <= k; i++) {
    if (k % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(3));

// further optimization
// if n is not divisible by 2 it is also not divisible by any other even number so all other even numbers can be skipped
