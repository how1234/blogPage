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
 * 时间复杂度O(N)，遍历n个点
 * 空间复杂度O(h)
 */
var diameterOfBinaryTree = function(root) {
    let res  = 0;
    //dfs，后序遍历
    //这道题需要注意的是，并不一定是从根节点出发，所以我们需要一个变量对所有子节点的左右深度都做一次比较，记录下最大值。
    function helper(root){
        if(!root) return 0 
        //自下而上
        let leftDepth = helper(root.left)
        let rightDepth = helper(root.right)

        //到该点为止的最大直径
        //以n为节点的树的最大直径就是该节点左子树于右子树的最大深度之和减1。
        res = Math.max(res,leftDepth+rightDepth)
        
        //该点的最大高度
        let maxDepth = Math.max(leftDepth, rightDepth) + 1

        
        return maxDepth
    }

    helper(root)
    return res
    
    

};