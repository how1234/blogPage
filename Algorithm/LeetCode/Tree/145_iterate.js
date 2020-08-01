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
 * 因为后序遍历是从下到上，从左到右输出
 * 所以压栈的时候要从上到下，从右到左压并且添加元素。
 * 然后输出的时候逆序即可
 */
var postorderTraversal = function(root) {
    let numbers = []
    let stack = []

    if(!root) return numbers
    
    stack.push(root)

    while(stack.length){
        let node = stack.pop()
        numbers.push(node.val)
        if(node.left){
            stack.push(node.left)
        }
        if(node.right){
            stack.push(node.right)
        }
    }
    
    return numbers.reverse()
};