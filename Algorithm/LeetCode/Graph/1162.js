/**
 * @param {number[][]} grid
 * @return {number}
 * 时间复杂度O(N2) 要遍历N*N个点
 * 空间复杂度O(N2) 要保存N*N个点
 */
var maxDistance = function(grid) {
    //bfs

    //思路如下
    //1.找到所有陆地
    //2.对所有陆地进行层次遍历
    //3.将所有点遍历完，进行层次遍历的次数就是最远距离

    
    //需要注意的是，由于是无向图，需要标记点已经被访问，可以使用数组或者在原点上改变值


    let rows = grid.length;
    if(!rows) return -1
    let cols = grid[0].length
    let res = -1;

    let queue = []

    for(let i = 0; i<rows;i++){
        for(let j = 0; j<cols;j++){
            if(grid[i][j] == 1){
                queue.push(i*cols+j)
            }
        }
    }
    //没有陆地或者全是陆地
    if(queue.length === 0 || queue.length === rows * cols){
        return -1
    }
    while(queue.length){
        res++

        let len = queue.length
        for(let i = 0;i<len;i++){
            let coor = queue.shift()
            let x = parseInt(coor/cols)
            let y = coor % cols

            if( x+1 < rows && grid[x+1][y] == 0){
                grid[x+1][y] = 2 //标记着已经走过
                queue.push( (x+1)*cols+y)
            }
            if( x-1 >= 0 && grid[x-1][y] == 0){
                grid[x-1][y] = 2
                queue.push( (x-1)*cols + y)
            }
            if( y+1 < cols && grid[x][y+1] == 0){
                grid[x][y+1] = 2
                queue.push( x*cols + y+1)
            }
            if( y-1 >= 0 && grid[x][y-1] == 0){
                grid[x][y-1] = 2
                queue.push(x*cols + y-1)
            }
            

        }
    }
    return res
};