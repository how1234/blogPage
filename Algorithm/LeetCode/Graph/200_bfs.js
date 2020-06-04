//时间复杂度O(MN)，遍历所有点
//空间复杂度O(MN)，迭代所有点
var numIslands = function(grid) {
    //bfs
    //基本思路有两个，每遇到一个1就开始一次深度优先搜索，直到所有遇见的岛屿走完
    //看能进行几次优先搜索

    if(!grid.length) return 0
    let res = 0;
  
    let rows = grid.length
    let cols = grid[0].length
   
    function bfs(i,j){
        grid[i][j] = 0
        let queue = []
        queue.push(i*cols + j)

        while(queue.length){
            let coordinates = queue.shift()
            let x = parseInt(coordinates / cols)
            let y = coordinates % cols
            

            if(x+1 < rows && grid[x+1][y] == 1){
                grid[x+1][y] = 0
                queue.push( (x+1)*cols + y)
            }
            if(x-1 >= 0 && grid[x-1][y] == 1){
                grid[x-1][y] = 0
                queue.push( (x-1)*cols + y)
            }
             if(y+1 <cols && grid[x][y+1] == 1){
                grid[x][y+1] = 0
                queue.push(x*cols + (y+1))
            }
             if(y-1 >= 0 && grid[x][y-1] == 1){
                grid[x][y-1] = 0
                queue.push(x*cols + (y-1))
            }
        }

    }
  

    for(let i = 0;i<rows;i++){
        for(let j = 0; j<cols;j++){
            if(grid[i][j] == 1){
                res++
                bfs(i,j)
            }
        }
    }

    return res
};