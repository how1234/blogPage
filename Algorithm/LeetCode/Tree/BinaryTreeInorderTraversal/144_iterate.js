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
 * 前序遍历是根，左，右的顺序
 * 所以压栈的时候按照根，右，左的顺序压。
 */
var preorderTraversal = function(root) {
    let stack = []
    let numbers = []
    if(!root) return []
    stack.push(root)


    while(stack.length){
        let node = stack.pop()
        numbers.push(node.val)
        //因为栈是先入后出，所以，我们先右子树入栈，然后左子树入栈
        if(node.right){
            stack.push(node.right)
        }

        if(node.left){
            stack.push(node.left)
        }
    }
    return numbers
};