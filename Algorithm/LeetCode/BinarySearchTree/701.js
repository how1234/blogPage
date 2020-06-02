/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 * 时间复杂度O(h)
 * 空间复杂度O(h)
 */
var insertIntoBST = function(root, val) {
    
    if(!root){ //到达空节点的时候
        return new TreeNode(val)
    }else{
        //如果插入节点大于当前节点,插到右子树
        if(root.val < val){
            root.right = insertIntoBST(root.right,val)
        //反之插到左子树
        }else{
            root.left = insertIntoBST(root.left,val)
        }

    }
   return root


};