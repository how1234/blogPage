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
 * 空间复杂度O(LogN)
 */
var getMinimumDifference = function(root) {
    
    //如果是二叉搜索书，并且全为非负数的话，任意两节点差的最小值应该出现在两个相邻节点上。

    //因此对每个节点的前节点进行一个保存，对每个点与它的前面节点进行相减，更新差的最小值。
    let pre = Number.MAX_SAFE_INTEGER
    let min = Number.POSITIVE_INFINITY

    function helper(root){
        if(!root) return 

        helper(root.left)

        let tempDiff = Math.abs(root.val - pre)
        if(tempDiff < min){
            min = tempDiff
        }
        pre = root.val //保存前一个点

        helper(root.right)
    }

    helper(root)

  
    return min

};