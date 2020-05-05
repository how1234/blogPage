/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []

    let queue = []
    let res = []
    let level = 0

    queue.push(root)

    while(queue.length){
        let temp = []
        let queueL = queue.length
        for(let i = 0;i < queueL;i++){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            temp.push(node.val)
        }
        res.push(temp)
    }
    return res
};