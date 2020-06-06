/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 * 时间复杂度O(N) N是像素的个数，可能渲染全部像素
 * 空间复杂度O(N) 递归调用每次是O(1)，调用N次是O(N)
 */
var floodFill = function(image, sr, sc, newColor) {
    //从目标像素位置开始上色，渲染周边和目标像素初始颜色相同的像素。
    let rows = image.length
    if(!rows) return image

    let cols = image[0].length
    let color = image[sr][sc]

    //如果新老颜色相同，直接返回
    if(color === newColor) return image
    //dfs遍历整幅图，把所有与初识坐标相连的且颜色相同的色块染成新颜色(new color)
    function dfs(r,c){
        
        //边界状况
        if(r < 0 || r >= rows || c < 0 || c >= cols) return
        
        //遇到相同颜色的，开始染色，开始遍历。
        if(image[r][c] === color){
            image[r][c] = newColor
             dfs(r+1,c)
            dfs(r-1,c)
            dfs(r,c+1)
            dfs(r,c-1)
        }
        
       
    }

    dfs(sr,sc)
    return image
};