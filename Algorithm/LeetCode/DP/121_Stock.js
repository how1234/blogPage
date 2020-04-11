var maxProfit = function(prices) {
    let max = Number.MIN_SAFE_INTEGER
    
    let len = prices.length
    if(len === 0 || len === 1){
        return 0
    }
    let dp = new Array(len)

    for (let i = 0;i<len;i++){
        dp[i] = new Array(2).fill(0)
    } 
    dp[0][0] = 0
    dp[0][1] = -prices[0] 

    for (let i = 1;i<len;i++){

        dp[i][0] = Math.max(dp[i-1][1]+prices[i],dp[i-1][0])
        dp[i][1] = Math.max(dp[i-1][1],-prices[i])
        if(dp[i][0] > max){
            max = dp[i][0]
        }
        
    }
    return max
};