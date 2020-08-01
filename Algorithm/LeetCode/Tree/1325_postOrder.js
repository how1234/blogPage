/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 * 时间复杂度O(N)
 * 空间复杂度O(h)
 */
var removeLeafNodes = function(root, target) {
    
    //后序遍历，回溯时候删除
    
    if(!root) return null

    //自底而上，这样子可以连续删除叶子节点
    //拿第一个例子为例，当底部的节点被删除之后，上面的节点的left和right节点就都为空值，那也会被删除
    root.left = removeLeafNodes(root.left,target)
    root.right = removeLeafNodes(root.right,target)

    //到达叶节点进行一个判断
    //是否为我们要删除的节点
    if(!root.left && !root.right && root.val === target){
        return null
    }
    //不是的话直接返回该节点
    return root
    
};