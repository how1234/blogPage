/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(!A || !B) return false
    //判断B是否为A的子结构
    //A节点是否和B是同一棵树
    //A左子树是否和B是同一棵树
    //A右子树是否和B是同一棵树
    return isSubTree(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B)

    function isSubTree(nodeA,nodeB){
        if(!nodeB) return true //B遍历完毕
        if(!nodeA) return false //A遍历完毕
        if(nodeA.val !== nodeB.val) return false //有节点不想等
        
        return isSubTree(nodeA.left,nodeB.left) && isSubTree(nodeA.right,nodeB.right)
    }
};