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
 * 时间复杂度O(N) 遍历N个节点
 * 空间复杂度O(h) h为树的高度 
 */
var isUnivalTree = function(root) {
    //recursive
    if(!root) return true

    let fixValue = root.val
    let result = true

    function dfs(node){
        if(!node) return 

        if(node.val !== fixValue){
            result = false
        }

        dfs(node.left)
        dfs(node.right)
        
    }

    dfs(root)
    return result
    
};