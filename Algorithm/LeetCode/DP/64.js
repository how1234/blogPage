/**
 * @param {number[][]} grid
 * @return {number}
 * 时间复杂度O(MN)
 * 空间复杂度O(MN)
 */
var minPathSum = function(grid) {
    let m = grid.length

    if(!m || !grid[0].length) return 0
    let n = grid[0].length

    let dp = new Array(m)
    
    for (let i = 0;i<dp.length;i++){
        dp[i] = new Array(n).fill(0)
    }

    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            
            if(i == 0 && j == 0){ 
                dp[i][j] = grid[i][j]
            }else if(i==0){//第一行
                dp[i][j] = dp[i][j-1] + grid[i][j]
            }else if(j==0){ //第一列
                dp[i][j] = dp[i-1][j] + grid[i][j]
            }else{
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j]
            }
        }
    }
    return dp[m-1][n-1]
};