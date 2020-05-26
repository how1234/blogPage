/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {

    let res = 0;

    function helper(root){
        if(!root) return 0
        //自下而上遍历，后序遍历
        let leftDepth = helper(root.left)
        let rightDepth = helper(root.right);


        //对于每个点做一个同值路径判断，同值的话就加上1（算上该点），不然直接归0
        if(root.left && root.left.val === root.val){ 
            leftDepth += 1
        }else{
            leftDepth = 0
        }
        if(root.right && root.right.val === root.val){
            rightDepth +=1
        }else{
            rightDepth = 0;
        }
        //更新路径
        res = Math.max(res,leftDepth+rightDepth)
        
        //这里不加1是因为在leftDepth那里已经判断过了。
        return Math.max(rightDepth,leftDepth)
    }
    helper(root)
    return res
};