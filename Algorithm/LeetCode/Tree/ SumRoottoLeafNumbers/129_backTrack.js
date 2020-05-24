/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 时间复杂度O(N) 遍历数组的每个点
 * 空间复杂度O(h) 看树的高度
 * 
 */
var sumNumbers = function(root) {
    //自上而下的回溯
    let res = 0
    let temp = '' //代表当前路径的元素
    let helper = function(root,temp){
        if(!root) return root //空节点不管

        //叶子节点，到底，此时进行一个合并操作
        if(!root.left && !root.right){
            temp+=root.val
            res += Number(temp)
            temp.slice(0,-1)
            return 
        }

        //非叶子节点

        temp+=root.val
        helper(root.left,temp)
        helper(root.right,temp)
        temp.slice(0,-1) //回溯
    }

    helper(root,temp)

    return res;

};