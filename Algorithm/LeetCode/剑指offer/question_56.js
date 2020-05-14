/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 时间复杂度，判断二叉树各层的节点对应的子数深度，每层执行的复杂度是O(N),一共有logN层，所以是O(NlogN)复杂度
 * 空间复杂度O(N) 最差情况下（数退化成链表），数组递归需要使用O(N)的栈空间
 */
var isBalanced = function(root) {
    
    if(!root) return true

    function depth(node){
        if(!node) return 0

        return Math.max(depth(node.left),depth(node.right)) + 1 

    }
    return Math.abs(depth(root.left) - depth(root.right)) <=1 && isBalanced(root.left) && isBalanced(root.right)
 
};