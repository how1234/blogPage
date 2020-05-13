/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 */
//顺序中序遍历可以从小到大输出二叉搜索树，逆序中序遍历可以从大到小
var kthLargest = function(root, k) {
    let count = 0
    let res
    function dfs(node){
        if(!node) return 

        dfs(node.right)

        count +=1
        if(count === k){
            res = node.val
            
        }
        dfs(node.left)
    }
    dfs(root)
    return res

};