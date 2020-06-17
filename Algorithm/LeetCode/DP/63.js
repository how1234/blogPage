/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 时间复杂度O(MN)
 * 空间复杂度O(MN)
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    //dp[i][j]表示走到该坐标的各种走法
    //边界条件

    if(!obstacleGrid.length || !obstacleGrid[0].length) return 0
   
    let m = obstacleGrid.length
    let n = obstacleGrid[0].length
    let dp = new Array(m)

    for(let i = 0;i<dp.length;i++){
        dp[i] = new Array(n).fill(0)
    }

    for(let i = 0;i<m;i++){
        for(let j=0;j<n;j++){
            if(obstacleGrid[i][j] == 1){
                //遇到障碍物
                dp[i][j] = 0
            }else{
                if(i == 0 && j == 0){ //初始点
                    //初始化
                    dp[i][j] = 1
                }else if(i==0){ //第一列
                    dp[i][j] = dp[i][j-1]
                }else if(j==0){ //第一行
                    dp[i][j] = dp[i-1][j]
                }else{
                    dp[i][j] = dp[i-1][j] + dp[i][j-1]
                }
            }
        }
    }
    return dp[m-1][n-1]
};