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
var postorderTraversal = function(root) {
    let numbers = []
    if(!root) return numbers


    function helper(node){
        if(!node) return

       
        helper(node.left)
        helper(node.right)
        numbers.push(node.val)
    }
    helper(root)
    
    return numbers
};