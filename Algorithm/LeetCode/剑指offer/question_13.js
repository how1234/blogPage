/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    function getNum(num){
        let res = 0;
        while(num){
            res += num %10;
            num = Math.floor(num / 10)
        }
        return res
    }
    const directoryArr = [
        [-1,0],
        [0,1],
        [1,0],
        [0,-1]
    ]
    let queue = [[0,0]]
    let recordSet = new Set(['0,0'])
    
    while(queue.length){
        let [x,y] = queue.shift()
        for(let i = 0;i<4;i++){
            let newX = x + directoryArr[i][0]
            let newY = y + directoryArr[i][1]

            if(newX < 0||newX >= m || newY < 0 ||newY >= n || getNum(newX) + getNum(newY) > k || recordSet.has(`${newX},${newY}`)){
                continue
            }
            recordSet.add(`${newX},${newY}`)
            queue.push([newX,newY])
        }
    
    }
    return recordSet.size
};