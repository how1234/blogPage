/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var maxDepth = function(root) {
    
    if(!root) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
   
};