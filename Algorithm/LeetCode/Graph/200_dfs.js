//时间复杂度O(MN)，遍历所有点
//空间复杂度O(MN)，递归调用了i和j两个常数MN次
var numIslands = function(grid) {
    //dfs
    //基本思路有两个，每遇到一个1就开始一次深度优先搜索，直到所有遇见的岛屿走完
    //看能进行几次优先搜索

    if(!grid.length) return 0
    let res = 0;
  
    let rows = grid.length
    let cols = grid[0].length
   
    function dfs(i,j){
        
        //边界状况
        if(i < 0 || i > rows-1 || j < 0 || j> cols-1) return 

        //遇到水返回
        if(grid[i][j] == 0) return 
        //走过的陆地要标记为水
        if(grid[i][j] == 1) grid[i][j] = 0
        
        //只能水平方向走
        dfs(i+1,j)
        dfs(i,j+1)
        dfs(i-1,j)
        dfs(i,j-1)

    }
  

    for(let i = 0;i<rows;i++){
        for(let j = 0; j<cols;j++){
            if(grid[i][j] == 1){
                res++
                dfs(i,j)
            }
        }
    }

    return res
};