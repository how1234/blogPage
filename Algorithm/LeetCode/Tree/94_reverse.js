/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 时间复杂度O(N)
 * 空间复杂度最坏情况是O(N)，平均情况O(LogN)
 */
var inorderTraversal = function(root) {
    let numbers = [];
    
    function helper(node){
        if (!node) return 

        helper(node.left)
        numbers.push(node.val)
        helper(node.right)
    }

    helper(root)
    
    return numbers
};