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
   
    function dfsSerialize(node,index){
        if(node){
            serializedList[index] = node.val
            dfsSerialize(node.left,(index+1)*2-1)
            dfsSerialize(node.right,(index+1)*2)
        }
    }

    dfsSerialize(root,0)
    
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

    function dfs(index){
        if(data[index] == null) return null
        let node = new TreeNode(data[index])
        node.left = dfs((index+1)*2-1)
        node.right = dfs((index+1)*2)
        return node
    }
    root.left = dfs(1)
    root.right = dfs(2)

    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */