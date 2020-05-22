/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 * 时间复杂度O(s * t) 对于s树上的每一个点都要进行一次t遍历
 * 时间复杂度O(max(h)) h为两棵树的最大深度
 */
var isSubtree = function(s, t) {
    
    if(!s) return false //边界条件，s为空树直接false

    //如果t是s的子树，要么t等于s，要么t等于s的左右子树,只要有一个成立就成立，所以使用or比较

    return isSameTree(s,t) //与当前树是否与t相等
    || isSubtree(s.left,t)//对s进行左子树递归
    || isSubtree(s.right,t)//对s进行右子树递归
    


    function isSameTree(s,t){
        //如果两者都为空，不破坏判断
        if(!s && !t) return true
        //如果其中有一棵为空，t不可能为s的子树
        if(!s || !t) return false
        
        //两者都不为空，开始比较值
        if(s.val != t.val) return false
        
        //递归地进行比较，相当于遍历s和t的所有点，只要有一个不符合，即t和s不完全相同
 
        return isSameTree(s.left,t.left) && isSameTree(s.right,t.right)
    }

    
  
};