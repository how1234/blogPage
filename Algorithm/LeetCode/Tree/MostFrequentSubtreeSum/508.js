/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var findFrequentTreeSum = function(root) {
    let temp = {}
    let resArr = []
    let maxCount = 0;

    function recordSum(val){
        if(!temp[val]){
            temp[val] = 0
        }
        temp[val] +=1
        if(temp[val] >= maxCount) {
            maxCount = temp[val]
        }
    }
    //后序遍历，从底向上，每个点的值即为他的子树和
    function helper(root){
        if(!root) return 0
        
        //到叶节点了，记录叶节点的值以及出现次数。
        if(!root.left && !root.right){
            recordSum(root.val)
            return root.val
        }
        //记录每个非叶节点的子树之和以及出现次数。
        let leftSum = helper(root.left)
        let rightSum = helper(root.right)
        
        root.val = root.val+leftSum+rightSum
        recordSum(root.val)
        //返回上层节点
        return root.val
    }
    helper(root)
    //把obj里面所记录的所有值的最大值找出来
    for(let key in temp){
        if(temp[key] === maxCount){
            resArr.push(key)
        }
    }
    return resArr
    

};