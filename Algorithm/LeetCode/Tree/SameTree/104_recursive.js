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
 * 空间复杂度O(h)
 */
var maxDepth = function(root) {
    if(!root) return 0

    let leftSubTreeDepth = maxDepth(root.left)
    let rightSubTreeDepth = maxDepth(root.right)

    return Math.max(leftSubTreeDepth,rightSubTreeDepth) + 1
};