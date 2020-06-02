/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var sortedArrayToBST = function(nums) {
    //分治构建二叉树

    function helper(l,r){
        
        if(r < l) return null //到底

        //
        let mid = l + (r-l >> 1)

        let root = new TreeNode(nums[mid])

        root.left = helper(l,mid-1)

        root.right = helper(mid+1,r)

        return root
    }
    
    
    
    return helper(0,nums.length-1)
};