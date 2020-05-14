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
var maxDepth = function(root) {
    if(!root) return 0
    let queue = []
    
    queue.push(root)
    let res = 0

    while(queue.length){
        let len = queue.length
        for(let i = 0;i<len;i++){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        res+=1
    }
   
   return res
};