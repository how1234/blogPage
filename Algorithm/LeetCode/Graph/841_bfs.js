/**
 * @param {number[][]} rooms
 * @return {boolean}
 * 时间复杂度(N+K),N是房间数量，K是钥匙数量
 * 空间复杂度(N) 使用一个数组来保存房间是否被查看的状态。
 */
var canVisitAllRooms = function(rooms) {
    //bfs
    
    if(!rooms.length) return false

    let visited = new Set()
    let queue = []

    queue.push(0)
    visited.add(0)

    while(queue.length){
        let room = queue.shift()
  
        for(let key of rooms[room]){

            if(!visited.has(key)){
                visited.add(key)
                queue.push(key)
            }
        }

    }

    return visited.size === rooms.length
};