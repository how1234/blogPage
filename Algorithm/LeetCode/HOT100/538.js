/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 时间复杂度O(N)
 * 空间复杂度O(LogN)
 */
var convertBST = function(root) {
    
    //左-根-右是从小到大
    //右-根-左是从大到小

    //因为是从大到小访问，我们可以使用一个sum来保存到目前元素为止，所有比该元素大的元素累加之和
    let sum = 0 
    function helper(root){
        if(!root) return
        
        
        helper(root.right)

        root.val = root.val + sum 
        sum = root.val //累加最大值


        helper(root.left)        
    }

    helper(root)
    
    return root 
};