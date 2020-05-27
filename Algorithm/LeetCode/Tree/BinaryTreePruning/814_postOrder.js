/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 时间复杂度O(N)
 * 空间复杂度O(H)
 */
var pruneTree = function(root) {
    //和题目1325非常相似，我理解的就是把所有为0的叶子节点全部删除，如果删除某个叶子节点，它的父节点成为新的叶子节点且值刚好为0时，该节点也需要被删除

    
    
    if(!root) return root

    //自底而上
    //叶子节点删除之后，它的父节点再进行新的判断
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    
   
    if(!root.left && !root.right && root.val === 0){
        return null
    }
    return root
};