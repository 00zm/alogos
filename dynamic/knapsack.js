// 0/1 knapsack (bag) (uses dp, either keep item or leave item)
// fractional knapsack (if remaing space is not for a full item fill bag with a fractional item in this greedy is used and not dp)
// unbounded knapsack one item can be added multiple times
// items are given each item has a weight and value total capacity is given
// to identify dp problem you have a choice and a maximization

// recursive knapsack code
// recursive because choices are given
// w = 7 capacity of knapsack
// values = [1,3,4,9]
// weight = [1,3,4,5]
// for base condition think of the smallest valid input
// make a choice diagram
// if w1 is less than capacity then you have a choice to include or not include this weight
// if w1 is greater then it cannot be included
// matrix is top down(its alternative is memoization)

// to use matrix takes things changing in this case capacity and n=len of val or weights is changing
// m[n+1][w+1] from zero to w values , 0 to n values
// initialize with -1 values matrix
// before making recursive call check value in matrix if it exists return if -1 call function

let weights = [1, 2, 3, 4];
let vals = [20, 10, 30, 40];
let capacity = 6;

const maxProfit = (weigthArr, valueArr, capacity) => {
  let p1 = Number.MIN_VALUE;
  let p2 = Number.MIN_VALUE;
  let p3 = Number.MIN_VALUE;
  let profit = 0;
  console.log({ weigthArr, valueArr, capacity });
  if (weigthArr.length == 0 || valueArr.length == 0 || capacity == 0) {
    return 0;
  }
  if (weigthArr.at(-1) <= capacity) {
    let newWeight = weigthArr.slice(0, weigthArr.length - 1);
    let newVal = valueArr.slice(0, valueArr.length - 1);
    // consider value in bag
    p1 =
      valueArr.at(-1) +
      maxProfit(newWeight, newVal, capacity - weigthArr.at(-1));
    // dont consider value
    p2 = maxProfit(newWeight, newVal, capacity);
    return (profit = Math.max(p1, p2));
  } else {
    p3 = maxProfit(
      weigthArr.slice(0, weigthArr.length - 1),
      valueArr.slice(0, valueArr.length - 1),
      capacity
    );
    return p3;
  }
};

console.log(maxProfit(weights, vals, capacity));
