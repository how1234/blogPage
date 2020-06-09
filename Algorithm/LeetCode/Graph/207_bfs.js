/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * 时间复杂度O(N+M)， N为节点数量，M为边数量
 * 空间复杂度O(N+M)，邻接表数量为N，储存M条边数量
 */ 
var canFinish = function(numCourses, prerequisites) {
    //bfs
    //先生成入度表，入度就是所有接入该点的边数之和
    let ingrees = new Array(numCourses).fill(0)

    //邻接表
    let adjacency = new Array(numCourses)
    for(let i = 0;i<adjacency.length;i++){
        adjacency[i] = []
    }

    //通过课程安排生成邻接表和入度表
    
    for(let pair of prerequisites){
        //pair里面pair[0]的接入边是pair[1]，所以pair[0]的入度要增加
        ingrees[pair[0]]++
        adjacency[pair[1]].push(pair[0])    
    }
    
    //对于邻接表来说，他的数组长度就是他的出度
    
    let queue = []
    for(let i = 0;i<ingrees.length;i++){
        //先遍历入度为0的点
        if(ingrees[i] == 0){
            queue.push(i)
        } 
    }
  
    //bfs

    while(queue.length){
        let preCourse = queue.shift()
        numCourses--
  
        for(let curCourse of adjacency[preCourse]){

            //因为已经学完preCourse，preCourse是curCourse的一个前驱节点，所以curCourse的入度要减去1
            ingrees[curCourse] -= 1
            //如果curCourse入度变为0，加入bfs队列
            if(ingrees[curCourse] === 0){
                queue.push(curCourse)
            }
        }
    }
    return numCourses === 0
};