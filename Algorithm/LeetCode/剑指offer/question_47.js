/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
  
    //!这样子创建二维数组是不行的，里面的所有数组会指向同一个对象!
    // let dp = new Array(rows).fill(new Array(cols).fill(0))
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          
        if (i === 0 && j === 0) {
          continue;
        } else if (i === 0) {
          grid[i][j] += grid[i][j - 1];
        } else if (j === 0) {
          grid[i][j] += grid[i - 1][j];
        } else {
          grid[i][j] = Math.max(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
          
        }
      }
    }
    return grid[rows - 1][cols - 1];
  };
  