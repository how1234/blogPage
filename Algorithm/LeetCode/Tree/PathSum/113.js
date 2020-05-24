/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var pathSum = function(root, sum) {
    let res = []
    let temp = []
    //自上而下加回溯
    function helper(root,sum,res,temp){
        if(!root) return root 
        
        if(!root.left && !root.right){ //如果是叶子节点
            if(sum - root.val === 0){
                temp.push(root.val)
                res.push([...temp])
                temp.pop()
            }
            return //返回
        }
        
        //如果不是叶子节点
        //计算新的sum
        sum-=root.val
        temp.push(root.val)
        
        //递归左右子树

        helper(root.left,sum,res,temp)
        helper(root.right,sum,res,temp)
        //出栈 表回溯
        temp.pop()


        
    }

    helper(root,sum,res,temp)
    return res
};