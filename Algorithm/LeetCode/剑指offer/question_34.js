/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let res = [],path = []
    
    function helper(node,target){
        if(!node) return
        path.push(node.val)
        target -= node.val
        if(target === 0 && !node.left && !node.right){
            res.push([...path])
        }
        helper(node.left,target)
        helper(node.right,target)
        path.pop()
        
    }
    helper(root,sum)
     
    return res
};