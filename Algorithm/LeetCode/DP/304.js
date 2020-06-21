/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    let rows = matrix.length
    if(!matrix.length){
        return []
    }

    let cols = matrix[0].length;

    this.dp = new Array(rows+1).fill(0)
    for(let i = 0;i<rows+1;i++){
        this.dp[i] = new Array(cols+1).fill(0)
    }


    //多一行一列避免越界
    for(let i = 0;i<rows;i++){
        for(let j = 0;j<cols;j++){
            this.dp[i+1][j+1] = this.dp[i+1][j] + this.dp[i][j+1] - this.dp[i][j] + matrix[i][j] 
        }
    }
    
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.dp[row2+1][col2+1] - this.dp[row2+1][col1] - this.dp[row1][col2+1] + this.dp[row1][col1]
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */