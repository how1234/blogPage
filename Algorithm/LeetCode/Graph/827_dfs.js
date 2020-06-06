/**
 * @param {number[][]} grid
 * @return {number}
 * 时间复杂度O(N2)，n是表格长宽
 * 空间复杂度O(N2)，递归隐式空间栈
 */
var largestIsland = function(grid) {
    //dfs 查找每个岛屿的最大值
    let rows = grid.length
    if(!rows) return 
    let cols = grid[0].length

    let index = 2;
    let areas = []
    let tempArea = 0;
    let res = 0;
    
    //第一次遍历算出独立岛屿面积
    for(let i = 0;i<rows;i++){
        for(let j = 0;j<cols;j++){
            if(grid[i][j] == 1){
                tempArea = 0;
                dfs(i,j,index)
                res = Math.max(tempArea,res)
                areas[index] = tempArea
                index++
            }
        }
    }  

    //第二次对大海进行填海
    for(let i = 0;i<rows;i++){
        for(let j = 0;j<cols;j++){
            if(grid[i][j] == 0){ //遇到大海
                res = Math.max(fillOcean(i,j),res)
            }
        }
    }


    
    function fillOcean(i,j){
        //判断已经读过该岛
        let countedSet = new Set()
        let area1 = 0
        let area2 = 0
        let area3 = 0
        let area4 = 0
        let color = 0
       //在该点填海的面积就是他周围四个格子的岛屿之和
        if(i+1 < rows){
            color = grid[i+1][j]
            if(color > 1&& !countedSet.has(color)){
                area1 = areas[color]
                countedSet.add(color)
            }
        }

        if(i-1 >= 0){
            color = grid[i-1][j]
            if(color > 1 && !countedSet.has(color)){
                area2 = areas[color]
                countedSet.add(color)
            }
        }

        if(j+1 < cols){
            color = grid[i][j+1]
            if(color > 1 && !countedSet.has(color)){
                area3 = areas[color]
                countedSet.add(color)
            }
        }
        if(j-1 >= 0){
            color = grid[i][j-1]
            if(color > 1 && !countedSet.has(color)){
                area4 = areas[color]
                countedSet.add(color)
            }
        }
     
        return area1 + area2 + area3 + area4 + 1
    }
    
    function dfs(i,j,index){
        
        //边界状况
        if(i < 0 || i >= rows || j < 0 || j >= cols) return
        
        //要么已经走过，要么是海（等于0）
        
        if(grid[i][j] == 0 || grid[i][j] == index) return
  
        //对没走过的陆地进行染色
        if(grid[i][j] == 1) {
            tempArea+=1
            grid[i][j] = index
            
        }
 
        
        //遍历相邻点
        dfs(i+1,j,index)   
        dfs(i-1,j,index)   
        dfs(i,j-1,index)   
        dfs(i,j+1,index)   

    }
    return res
};