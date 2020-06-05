/**
 * @param {number[][]} M
 * @return {number}
 * 时间复杂度O(N2)
 * 空间复杂度O(N)
 */
var findCircleNum = function(M) {
    let len = M.length
    let visited = new Array(len).fill(0)

    let res = 0
    let queue = []

    for(let i = 0;i<len;i++){

        if(visited[i] == 0){ //没被访问过的点，从该点进行bfs
            queue.push(i)
            while(queue.length){
                let node = queue.shift()

                for(let j = 0 ;j<len;j++){
                    if(M[node][j] == 1 && visited[j] == 0){                     
                        visited[j] = 1
                        queue.push(j)
                    }
                }
            }
            //该点bfs完之后，形成一个朋友圈
            res++
        }
        
    }

   
    return res
};