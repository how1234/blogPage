/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 * 时间复杂度O(N)
 * 空间复杂度O(N)，O(2N) 约等于O(N）
 */
var levelOrder = function(root) {
    
    let queue = []
    let res = []

    if(!root) return queue //空树

    queue.push(root)
    let level = 0

    while(queue.length){
        let curLevelLen = queue.length

        for(let i = 0;i<curLevelLen;i++){
            
            let node = queue.shift()
            //初始化数组
            if(!res[level]){
                res[level] = []
            }
            
            res[level].push(node.val)
            let childrenList = node.children
            
            queue.push(...childrenList)
        }
        
        level++

    }

    return res
};