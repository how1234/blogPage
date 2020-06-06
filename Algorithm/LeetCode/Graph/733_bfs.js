/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 * 时间复杂度O(N) N是像素的个数，可能渲染全部像素
 * 空间复杂度O(N) 数组保持N个元素
 */
var floodFill = function(image, sr, sc, newColor) {
    //从目标像素位置开始上色，渲染周边和目标像素初始颜色相同的像素。
    let rows = image.length
    if(!rows) return image

    let cols = image[0].length
    let color = image[sr][sc]

    //如果新老颜色相同，直接返回
    if(color === newColor) return image
    
    //bfs
    let queue = []
    
    queue.push(sr *cols + sc)
    image[sr][sc] = newColor

    while(queue.length){
        let coor = queue.shift()
        let x = parseInt(coor / cols)
        let y = coor % cols

        if(x+1 < rows && image[x+1][y] === color){
            image[x+1][y] = newColor
            queue.push( (x+1) * cols + y)
        }
        if(x-1 >= 0  && image[x-1][y] === color){
            image[x-1][y] = newColor
            queue.push( (x-1) * cols + y)
        }
        if(y+1 < cols && image[x][y+1] === color){
            image[x][y+1] = newColor
            queue.push(x * cols + y + 1)
        }
        if(y-1 >=0 && image[x][y-1] === color){
            image[x][y-1] = newColor
            queue.push(x * cols + y -1 )
        }
        
    }
    
   
    return image
};