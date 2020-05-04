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
 */
var isSymmetric = function(root) {

    if(!root) return true

    function dfs(L,R){
        if(!L && !R) return true
        if(!L || !R) return false
        if(L.val !== R.val) return false
        return dfs(L.left,R.right) && dfs(L.right,R.left) 

    }
    return dfs(root.left,root.right)
};