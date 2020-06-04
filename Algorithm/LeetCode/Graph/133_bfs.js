/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 * 时间复杂O(N)
 * 空间复杂度O(N) 
 * 
 */
var cloneGraph = function(node) {
    //bfs

    let visited = new Map()

    if(!node) return 

    let queue = []

    queue.push(node)
    let cloneNode = new Node(node.val,[])
    visited.set(node,cloneNode)


    while(queue.length){
        let cur = queue.shift()

        for(let children of cur.neighbors){
            //如果邻接点未被访问
            if(!visited.has(children)){
                let new_node = new Node(children.val,[])
                visited.set(children,new_node)
                queue.push(children)
            }

            //该节点映射的克隆节点，添加克隆后的临界点
            visited.get(cur).neighbors.push(visited.get(children))
        }

    }
    return visited.get(node)

    
};