/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 * 时间复杂度O(h)
 * 空间复杂度O(h)
 */
var recoverTree = function(root) {
    //记录下两个点，然后进行交换
    //因为二叉搜索树一定是递增的，所以有个点会出现该点小于前面的点的情况

    let pre;
    let temp1;
    let temp2;

    //找到这两个点
    function helper(root){
        if(!root) return 

        helper(root.left)

        //找到异常的两个点
        if(pre && root.val < pre.val){
            if (!temp1) temp1 = pre
            temp2 = root
        }

        pre = root

        helper(root.right)

    }
    helper(root)

    let temp = temp2.val 

    temp2.val = temp1.val
    temp1.val = temp

    return root

};