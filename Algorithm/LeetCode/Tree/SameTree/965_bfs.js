/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    //bfs

    let queue = []

    if(!root) return false
    
    queue.push(root)

    let fixVal = root.val

    while(queue.length){
        
        let node = queue.pop()

        if(node.val !== fixVal){
            return false
        }

        if(node.left){
            queue.push(node.left)
        }

        if(node.right){
            queue.push(node.right)
        }

    }
    return true
};