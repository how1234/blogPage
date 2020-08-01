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
 * 时间复杂度O(NlogN) 对于每个深度为d的节点p，height(p)被调用p次
 * 空间复杂度O(N)
 * 自顶而下
 */
var isBalanced = function(root) {
    

    function height(node){ //求高度
        if (!node) return 0
        
        return Math.max(height(node.left),height(node.right)) + 1
    }
    if(!root) return true
    
    return Math.abs(height(root.left) - height(root.right)) <= 1 //该位置的左右子树高度差不大于1
    && isBalanced(root.right) //递归地对每个右节点做判断
    && isBalanced(root.left) //递归地对每个左节点做判断
    
};