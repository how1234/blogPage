/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 * 时间复杂度O(N)
 * 空间复杂度O(h)
 */
var trimBST = function(root, L, R) {
    
    
    //首先得知道二叉搜索树的特点
    //若某节点的左子树不为空，则它的左子树上的所有节点都小于该节点
    //若某节点的右子树不为空，则它的右子树上的所有节点都大于该节点

    //对于每个node来说只有四种情况


    //1.node不存在，直接返回
    if(!root) return root

    //2.当前node的值大于了右边界（R）的值，这意味着必须要裁掉所有当前节点的右子树
    if(root.val > R) return trimBST(root.left,L,R)
   

    //3.当前node的值小于了左边界（L）的值，这意味着必须要裁掉所有当前节点的左子树
    if(root.val < L) return trimBST(root.right,L,R)

    //4.当前node的值处于[L,R]区间，那么该节点的左右子树就等于剪裁后的左右子树

    root.left = trimBST(root.left,L,R)
    root.right = trimBST(root.right,L,R)
    
    return root
};