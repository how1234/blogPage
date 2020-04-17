/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if (matrix.length === 0){return false}
    
    let found = false
    let rows = matrix.length
    let cols = matrix[0].length 

    let row = 0
    let col = cols - 1
    
    while(row < rows && col >= 0){
        if(matrix[row][col] === target){
            found = true
            break
        }else if(matrix[row][col] >= target){
            col--
        }else{
            row++
        }
    }
    return found

};