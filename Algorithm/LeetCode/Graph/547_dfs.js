/**
 * @param {number[][]} M
 * @return {number}
 * 时间复杂度O(N2)
 * 空间复杂度O(N)
 */
var findCircleNum = function(M) {
    //思路是把矩阵看成无向图连通块，进行dfs看有几个连通块

    if(!M.length) return 0
    let len = M.length;
    let res = 0;
    let visited = new Array(len).fill(0) //构建一个标记数组

    function dfs(i){
        for(let j = 0;j<len;j++){
            if(M[i][j] == 1 && visited[j] == 0){ //如果连通，且未被访问过，就从这个点接着dfs
                visited[j] = 1
                dfs(j)
            }
        }
    }

    for(let i = 0;i<len;i++){
        //开始访问每个点
        if(visited[i] == 0){ //如果该点没有访问过
            dfs(i) //对该点的所有边进行dfs
            res++
        }
    
    }
    return res
    
};