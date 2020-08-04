/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 时间复杂度O(H)
 * 空间复杂度O(H)
 */
var isSymmetric = function(root) {
  if (!root) return true

  
  function helper(l,r){
      if(!l && !r) return true
      if(l && r && l.val === r.val && helper(l.left,r.right) && helper(l.right,r.left)){
          return true
      }
      return false
  }

  return helper(root,root)
  

};