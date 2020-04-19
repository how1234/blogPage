/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0){
        return 0
    }else if (n === 1){
        return 1
    }else{
        let dp = new Array(n)
        
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 1;
        for (let i=2;i<=n;i++){
            dp[i] = (dp[i-1] + dp[i-2]) % 1000000007
        }
        return dp[n]
    }

   
};