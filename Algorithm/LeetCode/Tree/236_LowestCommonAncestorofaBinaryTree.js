/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    if (!root) return null

    if(root.val === p.val || root.val === q.val) return root
    //Divide
    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right,p,q)
    //Conquer
    if(left && right){
        return root
    }else if(!left){
        return right
    }else if(!right){
        return left
    }
};