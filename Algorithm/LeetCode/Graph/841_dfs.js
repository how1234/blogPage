/**
 * @param {number[][]} rooms
 * @return {boolean}
 * 时间复杂度(N+K),N是房间数量，K是钥匙数量
 * 空间复杂度(N) 使用一个数组来保存房间是否被查看的状态。
 */
var canVisitAllRooms = function(rooms) {
    //dfs

    let visited = new Set()

    function dfs(roomNumber){
        if(!visited.has(roomNumber)){ //如果是第一次访问的房间，则进行检索
            visited.add(roomNumber) //标记为已经访问
            for(let key of rooms[roomNumber]){ //使用房间里面的钥匙开其他房间的锁
                dfs(key)
            }
            
        }
        

    }
  
    dfs(0)
 
    return visited.size === rooms.length
    
};