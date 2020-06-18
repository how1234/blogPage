/**
 * @param {character[][]} matrix
 * @return {number}
 * 时间复杂度(MN)
 * 空间复杂度(MN)
 */
var maximalSquare = function(matrix) {
    /**
        dp[i][j]表示以第i行第j列为右下角所能构成的最大正方形边长, 则递推式为: 
        dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1]);
    **/

    let m = matrix.length;
    
    if(!m) return 0
    let n = matrix[0].length

    let dp = new Array(m+1)

    for (let i = 0;i<m+1;i++){
        dp[i] = new Array(n+1).fill(0)
    }
    let res = 0;

    for(let i = 1;i<=m;i++){
        for(let j = 1;j<=n;j++){
            if(matrix[i-1][j-1] == 1){
                    dp[i][j] = 1 + Math.min(dp[i-1][j-1],Math.min(dp[i-1][j],dp[i][j-1]))
                    res = Math.max(dp[i][j],res)
            }
        }
            

    }
    
    return res * res
    
};