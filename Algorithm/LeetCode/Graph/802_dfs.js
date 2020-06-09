/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    //graph = [[1,2],[2,3],[5],[0],[5],[],[]] 的意思是：graph[0]为节点0可以到达的点有[1,2]，表示可以到达1和2； graph[1] : [2, 3] ;可以到达节点2,3. 一次类推， 完整画出来就如图了
    

    //对每个点看是否存在环，如果存在环就不安全
    let res = []

    let nums = graph.length
    if(!nums) return
    let flags = new Array(nums).fill(0)
    //三个状态，0是未被访问，1是其他节点访问过，2是本轮dfs访问过。

    function dfs(i){
        if(flags[i] > 0) return flags[i] == 1 //如果是2则返回false

        flags[i] = 2 //标记为本轮遍历过

        for(let j of graph[i]){
            if(flags[j] === 1) continue //已经其他节点访问过的

            if(flags[j] === 2|| !dfs(j) ) return false
        }

        flags[i] = 1
        
        return true
    }

    for(let i = 0;i<nums;i++){
        if(dfs(i)) res.push(i)
    }
    return res
};