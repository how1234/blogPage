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
 * 时间复杂度(2的n次幂) 对每一个点都要对其4个节点进行一波递归求解
 * 空间复杂度O(h) 
 */
var rob = function(root) {
    //对于每个点来说，偷取的最大金额是来自于以下两个途径
    //1.4个孙子节点+本节点偷的钱
    //2.2个儿子节点偷的钱
    
    //rob 这个函数返回的是该点的最大收益值
    //空节点无收益

    if(!root) return 0
    //所有对每个点我们可以求一个最大收益

    
    //1.4个孙子节点+本节点偷的钱
    let curNodeProfit = root.val

    if(root.left){
        curNodeProfit+= rob(root.left.left) + rob(root.left.right)
    }

    if(root.right){
        curNodeProfit+= rob(root.right.right) + rob(root.right.left)
    }

    //2个儿子节点偷的钱
    let curNodeProfit1 = rob(root.left) + rob(root.right)

    return Math.max(curNodeProfit,curNodeProfit1)
};