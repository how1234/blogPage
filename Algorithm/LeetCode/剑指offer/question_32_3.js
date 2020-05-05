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
    let reverseFlag = true

    queue.push(root)

    while(queue.length){
        let layerLength = queue.length
        if(!res[level]) res[level] = []

        for(let i=0;i<layerLength;i++){
            let node = queue.shift()
            res[level].push(node.val)

            if(node.right) queue.push(node.right)
            if(node.left) queue.push(node.left)
            
        }
        if(reverseFlag) res[level] = res[level].reverse()
        reverseFlag = !reverseFlag
        level += 1
    }

    return res
};