/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 * 时间复杂度O(N)
 * 空间复杂度O(h)
 * 
 */
var binaryTreePaths = function(root) {
    let res = []
    let tempString = ''

    //先序遍历(根，左，右)
    let dfs = function(root,tempString){
        if(!root) return

        tempString+=root.val
        if(!root.left && !root.right){
            res.push(tempString)
        }else{
            tempString+="->"
            dfs(root.left,tempString)
            dfs(root.right,tempString)
        }
    }

    dfs(root,tempString)
    return res
    
};