/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * 时间复杂度O(N) 遍历N个点
 * 空间复杂度O(LogN) 递归调用的空间栈为(LogN)
 */
var searchBST = function(root, val) {
    //利用二叉搜索树有序性质

    //到底都找不到的话返回null
    if(!root) return null


    //当前节点的值大于指定值，指定值如果存在，应该存在于当前节点的左子树中
    if(root.val > val) return searchBST(root.left,val)

    //找到 返回
    if(root.val === val) return root

    //当前节点的值小于指定值，指定值如果存在，应该存在于当前节点的右子树中
    if(root.val < val) return searchBST(root.right,val)
    
};