/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}、
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var levelOrder = function(root) {
    let queue = []
    let layer = 0
    let res = []
    if(!root) return []
    
    queue.push(root)
    while(queue.length){
        let len = queue.length
        for(let i = 0; i<len;i++){
            let node = queue.shift()
            
            if(!res[layer]){
                res[layer] = []
            }
            
            res[layer].push(node.val)
            let childrenList = node.children //直接展开添加下一层
            queue.push(...childrenList)
        }
        layer++
    
    }
    return res
};