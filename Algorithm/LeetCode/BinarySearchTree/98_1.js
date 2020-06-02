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
 * 时间复杂度O(N)，相当于遍历1次树节点
 * 空间复杂度O(LogN) 递归调用空间栈为LogN
 */

var isValidBST = function(root) {
    //根据前面的数组解法来改进，其实只用保存每个节点的之前那个节点的值就可以了，保证单调递增。

    //二叉搜索树的中序遍历一定是单调递增的
    
    let pre = Number.NEGATIVE_INFINITY

    function helper(root){
        if(!root){
            return true
        }

        if(!helper(root.left)){
            return false
        }

        if(root.val <= pre){
            return false
        }

        pre = root.val //更新遍历到这个点的时候，需要更新树当前的最大值

        return helper(root.right)
    }
    return helper(root)


};