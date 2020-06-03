/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(LogN)
 */
var kthSmallest = function(root, k) {
    let temp = 0;
    let res;
    function helper(root){
        if(!root) return 

        helper(root.left)

        temp++
        if(temp === k){
            res = root.val;
            return
        }
        helper(root.right)

    }
    helper(root)
    return res
};