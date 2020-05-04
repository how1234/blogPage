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
 */
var mirrorTree = function(root) {
    let mirror = root
    dfs(mirror)
    function dfs(node){
        if(node){
            let temp = node.left
            node.left = node.right
            node.right = temp
            dfs(node.left)
            dfs(node.right)
        }
        return
        
    }
    return mirror
    
};