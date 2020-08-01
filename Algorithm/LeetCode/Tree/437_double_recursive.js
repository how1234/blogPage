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
 * @return {number}
 * 时间复杂度O(N2) 是一个双重递归，平均情况是O(NlogN),最差情况退化成链表
 * 空间复杂度O(NLogN) 递归地访问每一个点，对每一个点的子节点在做一个递归的访问
 * 
 */


 //路径不需要从根节点开始，也不需要在叶节点结束，但是路径方向必须是向下的
 //那么对于每个点它的路径次数就是以下3种情况加起来的和
 //1.从它根节点出发的路径数量
 //2.从它左子树出发的路径数量
 //3.从它右子树出发的路径数量

 var pathSum = function(root, sum) {
    let count = 0; //起到一个全局变量的作用
    
    function pathSumHelper(root,sum){
        if(!root) return 
        helper(root,sum) //从它根节点出发的路径数量
        pathSumHelper(root.left,sum) //从它左子树出发的路径数量
        pathSumHelper(root.right,sum) //从它右子树出发的路径数量
    }

    function helper(root,sum){
        if(!root) return //空节点     
        sum -= root.val
        
        if (sum === 0){
            count+=1
        }
        //对每个点都做一个向下的递归
        helper(root.left,sum)
        helper(root.right,sum)
    }
    
    
    
    pathSumHelper(root,sum)

    return count
};
