/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let res1 = []
    let res2 = []

    function dfs(node,res){
        if(!node) return 
        if(!node.left && !node.right){
            res.push(node.val)
        }

        dfs(node.left,res)
        dfs(node.right,res)
    }
    dfs(root1,res1)
    dfs(root2,res2)

    return res1.toString() === res2.toString()

};