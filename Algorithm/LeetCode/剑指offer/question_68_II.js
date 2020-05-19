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
 * 
 */
// （1） 如果当前结点 rootroot 等于 NULL，则直接返回 NULL
// （2） 如果 root 等于 pNode 或者 qNode ，那这棵树一定返回 pNode 或者 qNode
// （3） 然后递归左右子树，因为是递归，使用函数后可认为左右子树已经算出结果，用 left 和 right 表示
// （4） 此时若left 为空，那最终结果只要看 right；若 right为空，那最终结果只要看 left
// （5） 如果 left 和 right 都非空，因为只给了 pNode 和 qNode 两个结点，都非空，说明一边一个，因此 root 是他们的最近公共祖先
// （6） 如果 left 和 right 都为空，则返回空（其实已经包含在前面的情况中了）

// 时间复杂度是 O(n)：每个结点最多遍历一次，
//空间复杂度是 O(n)：需要系统栈空间
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