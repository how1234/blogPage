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
var minDepth = function(root) {
    //bfs

    let queue = []
    if(!root) return 0 //根节点为空
    
    
    let level = 1; //初始高度至少为1
    queue.push(root)

    while(queue.length){
        let curLayerlen = queue.length

        for(let i = 0; i<curLayerlen;i++){
            let node = queue.shift()
            if(!node.left && !node.right){ //到达叶节点，直接返回
                return level
            }

            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }

            
           
        }
        level++
    }
};