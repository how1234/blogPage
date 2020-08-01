/**
 * @param {number[][]} matrix
 * @return {number[][]}
 * 时间复杂度O(MN)
 * 空间复杂度O(MN)
 */
var pacificAtlantic = function(matrix) {
  if (!matrix || !matrix[0]) return []
  let m = matrix.length
  let n = matrix[0].length
  
  //移动矩阵
  let moveMatrix = [[-1,0],[1,0],[0,1],[0,-1]]
  let flow1 = Array.from({length:m}, () => new Array(n).fill(false))
  let flow2 = Array.from({length:m}, () => new Array(n).fill(false))
  let res = []
  //深度优先
  function dfs(r,c,flow){
      flow[r][c] = true
      
      for(let move of moveMatrix){
          let newR = move[0] + r
          let newC = move[1] + c
          
          
          if(newR >= 0 && newR < m && newC >= 0&& newC < n 
          &&!flow[newR][newC]
          //保证逆流而上
          &&matrix[r][c] <= matrix[newR][newC]){
                dfs(newR,newC,flow)
          }
      }
  }
  
  //从海岸线往内陆遍历
  for(let i = 0;i < m;i++){
      //西边海岸(太平洋)
      dfs(i,0,flow1)
      //东边海岸（大西洋）
      dfs(i,n-1,flow2)
  }

   for(let j = 0;j < n;j++){
      //北边海岸(太平洋)
      dfs(0,j,flow1)
      //南边海岸（大西洋）
      dfs(m-1,j,flow2)
  }

  for(let i = 0;i<m;i++){
      for(let j = 0;j < n;j++){
          if(flow1[i][j] && flow2[i][j]){
              res.push([i,j])
          }
      }
  }
  
  return res

  
};