/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    //dfs判断图是否有环，如果从当前节点发动的dfs访问同一个节点两次，那就直接返回false
    let res = []
    //先生成邻接表
    let adjacency = new Array(numCourses)
    for(let i = 0;i<numCourses;i++){
        adjacency[i] = []
    }

    for(let [toP,fromP] of prerequisites){
        adjacency[fromP].push(toP)
    }

    //生成标志位来判断某个点是否被访问，0是没被访问，1是被其他节点发起的dfs访问过，2是本节点发起的dfs节点访问过
    let flag = new Array(numCourses).fill(0)


    function dfs(i){
        if(flag[i] == 1) return true //被其他节点访问过，直接跳过
        if(flag[i] == 2) return false //访问了两次
        flag[i] = 2 //本次dfs已经访问过
        for(let p of adjacency[i]){
           
            //在这轮dfs里面，flag[i] 一直等于2
            if (!dfs(p)) return false
        }
        
        flag[i] = 1
        res.push(i)
        return true
    }

    for(let i = 0;i<numCourses;i++){
        if(!dfs(i)) return []
    }
    
    return res.reverse()
    
   
}