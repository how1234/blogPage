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

    return isSubTree(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B)

    function isSubTree(nodeA,nodeB){
        if(!nodeB) return true //B遍历完毕
        if(!nodeA) return false //A遍历完毕
        if(nodeA.val !== nodeB.val) return false //有节点不想等
        
        return isSubTree(nodeA.left,nodeB.left) && isSubTree(nodeA.right,nodeB.right)
    }
};