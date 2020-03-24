var climbStairs = function(n) {
    if (n === 0){
        return 0
    }else if(n === 1){
        return 1
    }else if (n === 2){
        return 2
    }else{
        let dp = new Array(n+1).fill(0)
        dp[1] = 1
        dp[2] = 2

        for (let i=3;i<dp.length;i++){
            dp[i] = dp[i-1] + dp[i-2]
        }
   
         
        return dp[n]
    }
};