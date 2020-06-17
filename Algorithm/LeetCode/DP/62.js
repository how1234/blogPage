/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 时间复杂度O(MN)
 * 空间复杂度O(MN)
 */
var uniquePaths = function(m, n) {
    //dp[i][j] = dp[i-1][j] + dp[i][j-1]

    if(!m || !n) return 0
    let dp = new Array(m)
    for(let i = 0;i<m;i++){
        dp[i] = new Array(n)
    }

    for (let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(i === 0 || j===0){
                dp[i][j] = 1 //边界值为1
            }else{
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
           
        }
    }
    return dp[m-1][n-1]
};