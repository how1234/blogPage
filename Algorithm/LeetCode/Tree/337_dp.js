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
 * 时间复杂度O(N)
 * 空间复杂度O(N) 
 */
var rob = function(root) {
    //动态规划，自底而上
    //定义状态[1]为偷，[0]为不偷
    //则对每个点的状态都有如下计算
    //1.当前点不偷，也就是状态为0时，得到的收益是左子树偷的收益 + 右子树偷的收益
    //2.当前点偷，也就是状态为1时，得到的收益是左子树的儿子子树偷收益 + 右子树的儿子子树偷的收益 + 本身偷的收益之和

    //helper返回的是每个节点的状态，一个数组
    
    
    function helper(root){
        //如果遇到空节点
        if(!root) return new Array(2).fill(0) //偷和不偷收益都是0，直接返回[0,0]
        
        //定义返回非空节点数组
        let res = new Array(2).fill(0)

        //后序遍历
        let left = helper(root.left)
        let right = helper(root.right)

        //对每个节点做操作

        //当前点不偷，状态为0,收益为左右子树收益之和，需要注意的是对于每个左右子树，有可能出现不偷比偷的收益高的情况，所以需要比较
        //比如[4,1,null,2,null,3]
        res[0] = Math.max(left[1],left[0]) + Math.max(right[1],right[0])
        //当前点偷，则左右子树一定不能偷
        res[1] = left[0] + right[0] + root.val

        return res
         

    }


    let res = helper(root)
    return Math.max(res[0],res[1])
};