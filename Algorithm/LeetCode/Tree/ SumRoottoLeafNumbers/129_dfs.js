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
 * 时间复杂度O(N) 遍历数组的每个点
 * 空间复杂度O(h) 树的高度
 * 
 */
var sumNumbers = function(root) {
    if (!root) return 0
    let sum = 0
    recurse(root, 0)
    return sum

    function recurse(root, cur) {
        cur = cur*10 + root.val //[1,2,3]  第一轮1等于1，第二轮1*10+2 

        if (!root.left && !root.right) sum += cur
        if (root.left) recurse(root.left, cur)
        if (root.right) recurse(root.right, cur)
    }
};
