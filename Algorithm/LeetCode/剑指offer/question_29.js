/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if(matrix.length === 0) return []
    let res = []
    
    let top = 0
    let bottom = matrix.length-1
    let left = 0
    let right = matrix[0].length-1

    while(true){        
        for (let i = left;i<=right;i++){ //从左到右
            res.push(matrix[top][i])
        }
        top++
        if(top > bottom) break

        for (let i = top;i<=bottom;i++){ //从上到下
            res.push(matrix[i][right])
        }
        right--
        if(right < left) break

        for(let i = right;i>=left;i-- ){ //从右到左
            res.push(matrix[bottom][i])
        } 
        bottom--
        if(bottom < top) break

        for(let i = bottom;i >= top;i-- ){ //从下到上
            res.push(matrix[i][left])
        } 
        left++
        if (left > right) break

    }
    return res
};