/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    if(len === 0) return 0
    let max_k = 2

    let dp = Array.from(new Array(len),() => new Array(max_k+1))

    for(let i = 0;i<len;i++){
        for (let k = 0;k<=max_k;k++){
                dp[i][k] = new Array(2).fill(0)
        }
    }

    for (let i = 0;i<len;i++){
        for(let k = max_k;k >= 1;k--){
            if(i === 0){
                dp[i][k][0] = 0
                dp[i][k][1] = -prices[0]
                continue
            }
            dp[i][k][0] = Math.max(dp[i-1][k][0],dp[i-1][k][1] + prices[i])
            dp[i][k][1] = Math.max(dp[i-1][k][1],dp[i-1][k-1][0] - prices[i])
        }
    }
    return dp[len-1][2][0]

};