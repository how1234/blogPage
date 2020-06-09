/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    //bfs
    //参考207

    let res = []
    //生成入度表和邻接表
    let ingrees = new Array(numCourses).fill(0)
    let adjacency = new Array(numCourses)
    for (let i = 0;i<numCourses;i++){
        adjacency[i] = new Array()
    }

    for(let [toP,fromP] of prerequisites){
        ingrees[toP]+=1
        adjacency[fromP].push(toP)
    }

    let queue = []
    for(let i = 0;i<numCourses;i++){
        if(ingrees[i] === 0) queue.push(i)
    }


    
    while(queue.length){
        let preCourse = queue.shift()
        
        res.push(preCourse)

        for(let curCourse of adjacency[preCourse]){
            if(--ingrees[curCourse] === 0){
                queue.push(curCourse)
            }
        }
    }

    if(res.length === numCourses){
        return res
    }else{ 
        return []
    }
}