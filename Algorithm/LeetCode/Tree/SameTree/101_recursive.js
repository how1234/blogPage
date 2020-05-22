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
 * 判断一颗二叉树是否为对称的有3种情况
 * 左右子树都为空，对称
 * 左右子树有一个为空，不对称
 * 左右子树值相等
 * 时间复杂度O(N) 遍历整个树的节点一次
 * 空间复杂度O(h),h为树的高度，最差情况下树是线性的O(N)
 */
var isSymmetric = function(root) {

    if(!root) return true //空树是对称的
    function helper(left,right){
        if(!left && !right) return true //俩树都为空
        if(!left || !right) return false //左右子树有一个为空

        return left.val === right.val  //左右子树值得相等
        && helper(left.left,right.right) //递归地判断左子树的右子树以及右子树的左子树
        && helper(left.right,right.left) //递归地判断左子树的左子树以及右子树的右子树
    } 

    return helper(root,root)  //根节点肯定对称
    
};