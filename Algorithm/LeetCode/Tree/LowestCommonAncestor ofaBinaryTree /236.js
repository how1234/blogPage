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
 * 时间复杂度O(N)，遍历所有点
 * 空间复杂度O(h)，最差情况树退化成链表。
 */
var lowestCommonAncestor = function(root, p, q) {
    //最近公共祖先节点的定义：该点的左右子树，不含任何p和q的公共祖先节点。
    //所以可以使用后序遍历，寻找最底层的公共祖先节点，如果找到了，将该公共祖先节点从下往上传递。


    //找到点或者为空节点，则返回。
    if(!root || root === p || root === q){        
        return root
    }
   

    //后序遍历
    root.left = lowestCommonAncestor(root.left,p,q)
    root.right = lowestCommonAncestor(root.right,p,q)
    
    
    

    //例子讲解
    //根据题目描述里的树，假如你设p为5，q为1。
    //后序遍历，先遍历左子树，直到找到5为止，5此时返回的值为它本身。
    //然后遍历右子树，找到1，1此时返回的值为它本身。
    //然后最后看根节点3，node3的left值为5（由5返回），right值为1（由1返回）
    //返回3
    
    //如果左右子树都找到点，证明root为最小公共祖先
    if(root.left && root.right){
        return root
    }



    //例子讲解
    //根据题目描述里的树，假如你设p为7，q为4。
    //7和4在2的左右子树中被找到，所以2返回自身给5。
    //此时5的root.left为null值，所以返回root.right（2）
    //根节点此时的root.left被返回的是等于2，右子树返回的为null
    //所以直接得出答案2。

    //如果左子树找到了点，证明最小公共祖先在左子树。
    //如果左子树找不到点，证明最小公共祖先在右子树.
    return root.left ? root.left : root.right 
    
    

    
};