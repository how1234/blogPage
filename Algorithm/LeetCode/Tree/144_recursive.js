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
 */
var preorderTraversal = function(root) {
    let numbers = []
    if(!root) return numbers


    function helper(node){
        if(!node) return

        numbers.push(node.val)
        helper(node.left)
        helper(node.right)
    }
    helper(root)
    
    return numbers
};