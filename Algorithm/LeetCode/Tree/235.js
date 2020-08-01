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
 * 时间复杂度O(N)
 * 空间复杂度O(h)
 */
var lowestCommonAncestor = function(root, p, q) {
    //思路是q一定大于p
    if(p.val > q.val){
        let temp = p
        p = q
        q = temp
    }
    
    function helper(root,p,q){
         //如果点卡在中间，则证明为所求的最小公共祖先。
        if(root.val >= p.val && root.val <= q.val){
            return root

        //如果该节点的值都大于p和q，则证明公共祖先节点出现在左子树。
        }else if(root.val > p.val && root.val > p.val){
            return lowestCommonAncestor(root.left,p,q)
        // 如果该节点的值都小于p和q，则证明公共祖先节点出现在右子树。
        // 条件 ：root.val < p.val && root.val < p.val
        //其实还有一种情况是值大于p点但是小于p点，但是根据二叉搜索树的特性，这个点是不存在的，所以不考虑直接用else
        }else{
            return lowestCommonAncestor(root.right,p,q)
        }
    }
    return helper(root,p,q)
};