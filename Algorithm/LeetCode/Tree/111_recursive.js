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
 * 时间复杂度O(N),访问所有树一次
 * 空间复杂度O(h),h为树高度，一般来说都为O(NLogN),最差情况下会退化为O(N)
 */
var minDepth = function(root) {
    if(!root) return 0

    //[1,2] 的最小深度为2，所以需要考虑根节点子树为空的特殊情况。
    
    //当根节点的左子树为空时，比较右子树
    if(root.left == null && root.right != null){
        return 1+minDepth(root.right)
    }

    //当根节点的右子树为空时，比较左子树
    if(root.right == null && root.left != null){
        return 1+minDepth(root.left)
    }

    return Math.min(minDepth(root.left),minDepth(root.right)) + 1
};