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
 * 空间复杂度O(h+N) 整体O(N) h是图的深度，N是map需要的大小。
 * 
 */
var cloneGraph = function(node) {
    
    //首先用个Map来判断是否已经访问

    let visited = new Map()

    function helper(node){
        if(!node) return node //到头

        //访问字典里面已经有了，就无须再新建
        if(visited.has(node)){
            return visited.get(node)
        }

        //没访问过，克隆节点

        let new_node = new Node(node.val,[])
        visited.set(node,new_node)


        //遍历老节点的所有临近节点
        for(let el of node.neighbors){
            new_node.neighbors.push(helper(el))
        }


        return new_node
    }
    return helper(node)
};