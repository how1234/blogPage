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
 * 时间复杂度O(N)
 * 空间复杂度O(h)
 */
var maxPathSum = function(root) {
    
    let res  = Number.NEGATIVE_INFINITY;
    //dfs，后序遍历
    //这道题需要注意的是，并不一定是从根节点出发，所以我们需要一个变量对所有子节点的路径和都做一次比较，记录下最大值。
    function helper(root){
        if(!root) return 0 

        //对叶节点 
        if(!root.left && !root.right){
            res = Math.max(res,root.val)
            return root.val
        }

        //自下而上，对每个点算收益
        let left = Math.max(helper(root.left),0)
        let right = Math.max(helper(root.right),0)

        //处于该点的最大路径和。
        let pathSum = root.val + left + right

        //比较最终的路径和
        res = Math.max(res,pathSum)

        //返回自己包含子树的收益到上层
        return root.val + Math.max(left,right)
    }

    helper(root)
    return res
};