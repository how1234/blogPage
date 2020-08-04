/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * 
 * @return {TreeNode}
 * 时间复杂度O(N)
 * 空间复杂度O(h)
 */
var invertTree = function(root) {
    
  //前序遍历，对每个点进行左右子树交换
  if(!root) return root

  let temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)

  return root
};