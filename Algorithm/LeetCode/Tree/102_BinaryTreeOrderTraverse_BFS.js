/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder_BFSw = function(root) {
    if (!root) return []
    let res = []
    let queue = []
    queue.push(root)
    
    while (queue.length > 0){
        let curArray = []
        let curLayerSize = queue.length
        
        for (let i = 0;i<curLayerSize;i++){
            let node = queue.shift()
            curArray.push(node.val)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)  
        }
        res.push(curArray)
    }

    return res
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder_DFS= function(root) {
    if (!root) return []
    result = []
    helper(result,root,0)
    return result

    function helper(result,node,level){
        if (!node) return

        if(!result[level]) result[level] = []

        result[level].push(node.val)

        helper(result,node.left,level+1)

        helper(result,node.right,level+1)
    }
};