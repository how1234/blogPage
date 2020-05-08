/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root) return []
    let serializedList = []
   
    function dfsSerialize(node){
        if(node){
            serializedList.push(node.val)
            dfsSerialize(node.left)
            dfsSerialize(node.right)
        }else{
            serializedList.push(null)
        }
    }
    
    dfsSerialize(root)
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
    let index = 0
    function dfs(){
        if(data[index] == null){
            index += 1
            return null
        }
        let node = new TreeNode(data[index])
        index += 1
        node.left = dfs()
        node.right = dfs()
        return node
    }
   

    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */