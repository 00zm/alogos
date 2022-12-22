const coinChange = (target, coins, dp = {}) => {
  if (target in dp) {
    return dp[target];
  }
  if (target === 0) {
    return 0;
  }
  if (target < 0) {
    return -1;
  }

  let ans = Number.MAX_VALUE;
  let subAns = Number.MAX_VALUE;
  for (let i = 0; i < coins.length; i++) {
    subAns = coinChange(target - coins[i], coins, dp);
    if (subAns != -1 && subAns + 1 < ans) {
      ans = subAns + 1;
    }
  }
  ans == Number.MAX_VALUE ? -1 : ans;
  dp[target] = ans;
  return ans;
};

console.log(coinChange(18, [7, 5, 1]));
