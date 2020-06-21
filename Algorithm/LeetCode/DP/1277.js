/**
 * @param {number[][]} matrix
 * @return {number}
 * 时间复杂度O(MN)
 * 空间复杂度O(MN)
 */
var countSquares = function(matrix) {
    //dp[i][j]表示(i,j)位置所构成的正方形的最大边长
    //dp[i][j] = min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1、
    //表示从当前可得正方形的右下角点dp[i][j]的左方，上方，以及左上三个方向取最小值+1，即为当前最大正方形的边长值(因为要取正方形的最大边长，所有边长必须相等，故一定是取三个方向的最小值，才能保证边长相等)

    if(matrix.length === 0){
        return 0
    
    }

    let rows = matrix.length
    let cols = matrix[0].length

    let dp = new Array(rows)
    let res = 0

    for(let i = 0;i<dp.length;i++){
        dp[i] = new Array(cols) 
    }

    for(let i = 0;i < rows;i++){
        for(let j = 0;j<cols;j++){
            if(i == 0 || j == 0){
                dp[i][j] = matrix[i][j]
            }else if(matrix[i][j] == 0){
                dp[i][j] = matrix[i][j]
            }else{
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]) + 1
            }
            res+=dp[i][j]
        
        }
    }

    return res
};