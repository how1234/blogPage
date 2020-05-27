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
 * 空间复杂度O(h)
 */
var distributeCoins = function(root) {
    //对于每个点来说，都有一个金币量
    //我们可以自底向上求解，对于每个点我们分别算让它们子树平衡之后，剩下的金币量，在这个过程中我们统计让左右子树金币量为1所需要做的移动次数。
    
    let answer = 0;
    function helper(root){
        //自底而上

        if(!root) return 0 //空节点无需移动

        //对于左右节点都有
        //负数表示左节点需要扣除的金币，需要从根节点搬金币下去；正数表示多出的金币，需要将多出的金币搬上去；
        let left = helper(root.left) 
        let right = helper(root.right) 

        //移动次数（金币数的绝对值，无论是搬下去或者搬上来）
        answer += Math.abs(left) + Math.abs(right)

        //返回节点的金币量（已经扣除本身和左右节点需要的）
        return root.val + left + right - 1
    }
  
    helper(root)
    return answer

    
};