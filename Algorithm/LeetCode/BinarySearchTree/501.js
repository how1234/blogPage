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
 * 时间复杂度O(N) 遍历所有数字
 * 空间复杂度O(h) 结果数组为O(1),递归调用栈为O(h)
 */
var findMode = function(root) {
    let res = []; 
    let maxCount = 0; 
    let maxNumber = 0;

    let count = 0;
    let preValue = 0;
    function helper(root){
        
        if(!root) return

        helper(root.left)
        
        //判断当前值和上一个节点的关系
       
        if(root.val === preValue){ //如果相等，本轮计数器加一
            count+=1
        }else{ //如果不相等，计数器重置
            preValue = root.val 
            count = 1
        }

        //比较当前计数器和最大值的关系

        if(count === maxCount){ //如果计数器和最大值相等，意味着这个数字的出现频率与其他数字相同
            res.push(root.val)
        }else if(count > maxCount){ //如果当前计数器大于了最大值，证明其他众数并非众数，需要重置结果数组
            res = []
            res.push(root.val)
            maxCount = count //重新给最大计数器赋值
        }
        

        helper(root.right)
        
        
    }
    helper(root)
    return res
};