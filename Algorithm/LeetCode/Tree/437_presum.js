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
 * 时间复杂度O(N) 每个点遍历一次
 * 空间复杂度O(N)
 */


//前缀和
//基本思路是遍历一次，然后把之前的和先存到

var pathSum = function(root, sum) {
    
    //初始化，前缀和Map，意思为初值为0，不含任何路径的情况出现了1次。
    let prefixTree = new Map();
     let prefixSum = 0; 
    prefixTree.set('0',1) 
    
 
 
   
    let count = 0;
 
    let helper = function(root,sum,prefixSum){
        if(!root) return //空值直接返回
        
        prefixSum += root.val
        let prefixSumKey = prefixSum.toString()
        
        let existedSum = prefixSum - sum //与结果之间的差值
 
        let existedSumKey = existedSum.toString()
         
        if(prefixTree.has(existedSumKey)){ //看先前是否有已经存在的路径之和满足这个差值
            count+=prefixTree.get(existedSumKey) //有的话计数加上已有的路径和计数
        }
        
        //将当前路径和存入前缀和的Map中
        if(prefixTree.has(prefixSumKey)){ //已经存在键值对
             let previousNumber = prefixTree.get(prefixSumKey)
             prefixTree.set(prefixSumKey,previousNumber+1)
        }else{ //不存在
             prefixTree.set(prefixSumKey,1) //设为1
        }
       
 
         //从上往下遍历子树
         
         helper(root.left,sum,prefixSum)
         helper(root.right,sum,prefixSum)
 
         //遍历完之后要恢复状态,相当于就是把当前的点弹出路径。
         prefixTree.set(prefixSumKey,prefixTree.get(prefixSumKey)-1)
         
 
 
    }
 
    
 
     helper(root,sum,prefixSum)
     
 
 
     return count
 };
 