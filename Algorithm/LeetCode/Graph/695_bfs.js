/**
 * @param {number[][]} grid
 * @return {number}
 * 时间复杂度O(MN)
 * 空间复杂度O(MN)
 */
var maxAreaOfIsland = function(grid) {
    //从每个点进行一次bfs，进行岛屿值的计算

    let res = 0;

    let rows = grid.length
    if(!rows) return 0
    let cols = grid[0].length
    let temp = 0
    let queue = []

     for(let i = 0;i<rows;i++){
        for(let j = 0; j<cols;j++){
            if(grid[i][j] == 1){
                temp = 1
                grid[i][j] = 0
                queue.push(i * cols + j)
                
                while(queue.length){
                    let coor = queue.shift()
                    let x = parseInt(coor / cols)
                    let y = coor % cols
                    if(x-1 >= 0 && grid[x-1][y] == 1){
                        grid[x-1][y] = 0
                        temp+=1
                        queue.push((x-1) * cols + y)

                    }
                    if(x+1 < rows && grid[x+1][y] == 1){
                         grid[x+1][y] = 0
                        temp+=1
                        queue.push( (x+1) * cols + y)
              
                    }
                    if(y-1 >= 0 && grid[x][y-1] == 1){
                        grid[x][y-1] = 0
                        temp+=1
                        queue.push(x * cols + (y-1))
             
                    }
                    if(y+1 < cols && grid[x][y+1] == 1){
                        grid[x][y+1] = 0
                            temp+=1
                        queue.push(x * cols + y+1)
           
                    }
                }
                res = Math.max(temp,res)
               
            }
        
        }
    }
   
   return res

};