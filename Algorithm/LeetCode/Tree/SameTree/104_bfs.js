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
 * 一层一层遍历
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var maxDepth = function(root) {
    let queue = []
 
    let layer = 0
 
    if(!root) return 0
 
    queue.push(root)
 
    while(queue.length){
        let len = queue.length
        for(let i = 0;i<len;i++){
            let node = queue.shift()
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        layer++  
    }
    return layer
 };