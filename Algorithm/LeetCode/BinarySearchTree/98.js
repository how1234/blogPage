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
 * 时间复杂度O(N)，相当于遍历2次树节点
 * 空间复杂度O(N+LogN) 约等于O(N)，使用了一个额外数组来储存节点，递归调用空间栈为LogN
 */
var isValidBST = function(root) {
    //二叉搜索树的中序遍历一定是单调递增的
    

    let arr = []

    function helper(root){
        if(!root){
            return
        }
        helper(root.left)
        arr.push(root.val)
        helper(root.right)
    }
    helper(root)

    if(arr.length <=1){
        return true
    }
 
    //在数组里面，每一个元素的后面一个元素一定大于该元素。
    for (let i = 0;i<arr.length-1;i++){
        if(arr[i] >= arr[i+1]){
            return false
        }
    }
   
    return true
};