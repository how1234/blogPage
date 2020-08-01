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
 * 空间复杂度O(N)
 */
var binaryTreePaths = function(root) {
    let res = []
    let temp = []

    
    let helper = function(root,temp){
        if(!root) return root//空节点

        //叶节点
        if(!root.left && !root.right){
            temp.push(root.val)
            let arr = [...temp].join('->')
            res.push(arr)
            temp.pop()
            return 
        } 

        //非叶节点
        
        temp.push(root.val)
        helper(root.left,temp)
        helper(root.right,temp)
        temp.pop()
    }

    helper(root,temp)
    return res
    
};