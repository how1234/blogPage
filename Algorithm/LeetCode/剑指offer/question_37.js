/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 * 超时方法(BFS)
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return []
    let serializedList = []
   
    
    let queue = []
    queue.push([0,root])
    
    while(queue.length){     
        let nodePair = queue.shift()
        let nodeIndex = nodePair[0]
        let node = nodePair[1]
        if(node){
            serializedList[nodeIndex] = node.val
            if(node.left){
                let leftIndex = (nodeIndex+1)*2-1
                queue.push([leftIndex,node.left])
            }
            if(node.right){
                let rightIndex = (nodeIndex+1)*2
                queue.push([rightIndex,node.right])
            }
        }
    }
    return serializedList
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data || data.length === 0) return null
    let root = new TreeNode(data[0])
    
    let queue = []
    
    queue.push([0,root])

    while(queue.length){
        let nodePair = queue.shift()
        let nodeIndex = nodePair[0]
        let node = nodePair[1]

        let leftIndex = (nodeIndex+1)*2-1
        if(data[leftIndex] != null){ //左节点，考虑节点值可能为0
            node.left = new TreeNode(data[leftIndex])
            queue.push([leftIndex,node.left])
        }
        let rightIndex= (nodeIndex+1)*2
        if(data[rightIndex] != null){ //右节点，考虑节点值可能为0
            node.right = new TreeNode(data[rightIndex])
            queue.push([rightIndex,node.right])
        }

    }
    return root

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */