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
 */
var sortedArrayToBST = function(nums) {
    
    function helper(left,right){
        if(left > right){
            return null
        }
        let middle = (left+right) >> 1

        let root = new TreeNode(nums[middle])

        root.left = helper(left,middle-1)

        root.right = helper(middle+1,right)

        return root
    }

    return helper(0,nums.length-1)
};