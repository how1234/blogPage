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
 * 时间复杂度O(N) 遍历所有节点
 * 空间复杂度O(N) 保存一个长度为N的数组，队列存储所有节点，是O(2N)，约等于O(N)
 */
var levelOrderBottom = function(root) {
    
    //bfs

    let queue = []
    let res = []

    if(!root) return queue //空树

    queue.push(root)
    let level = 0
    //思路是自上而下添加数组，然后最后倒序输出，就达到了自下而上的效果。
    while(queue.length){
        let curLevelLen = queue.length

        for(let i = 0;i<curLevelLen;i++){
            let node = queue.shift()
            //初始化数组
            if(!res[level]){
                res[level] = []
            }
            
            res[level].push(node.val)

            if(node.left){
                queue.push(node.left)
            }

            if(node.right){
                queue.push(node.right)
            }
        }
        level++
    }

    return res.reverse()
};