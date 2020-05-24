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
 * @return {boolean}
 * 时间复杂度O(N)
 * 空间复杂度O(H)
 */
var hasPathSum = function(root, sum) {

    if(!root) return false

    sum -= root.val
    //到达叶子节点
    if(!root.left && !root.right){
        return sum == 0
    }

    return hasPathSum(root.left,sum) || hasPathSum(root.right,sum)

};