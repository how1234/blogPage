/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let count = 0;
    const directoryArr = [
        [-1,0],
        [0,1],
        [1,0],
        [0,-1]
    ]
    function getNum(num){
        let res = 0;
        while(num){
            res += num %10;
            num = Math.floor(num / 10)
        }
        return res
    }
    let recordSet = new Set()
    dfs(0,0)
   
    function dfs(x,y){    
        recordSet.add(`${x},${y}`)
        for(let i = 0;i<4;i++){
            let newX = x + directoryArr[i][0]
            let newY = y + directoryArr[i][1]
            
            if(newX >= 0 && newX < m && newY >= 0 && newY < n && getNum(newX) + getNum(newY) <= k &&!recordSet.has(`${newX},${newY}`)){
                dfs(newX,newY)
            }  
        }
    }
    return recordSet.size
};