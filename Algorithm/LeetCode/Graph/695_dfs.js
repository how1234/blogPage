/**
 * @param {number[][]} grid
 * @return {number}
 * 时间复杂度O(MN)
 * 空间复杂度O(MN)
 */
var maxAreaOfIsland = function(grid) {
    //从每个点进行一次dfs，进行岛屿值的计算

    let res = 0;

    let rows = grid.length
    if(!rows) return 0
    let cols = grid[0].length
    let temp = 0

     for(let i = 0;i<rows;i++){
        for(let j = 0; j<cols;j++){
            if(grid[i][j] == 1){
                temp = 0 //归零，从这个点开始计算
                dfs(i,j)
                res = Math.max(temp,res)
            }
        }
    }
    function dfs(i,j){
        //边界情况
        if(i < 0 || i >= rows || j<0 || j >= cols) return

        //遇到水就返回
        if(grid[i][j] == 0) return
        if(grid[i][j] == 1){
            temp+=1
            grid[i][j] = 0
        } 
        
        dfs(i+1,j)
        dfs(i-1,j)
        dfs(i,j+1)
        dfs(i,j-1)
    }
    return res

};