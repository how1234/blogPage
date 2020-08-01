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
    
    if(!root) return 
    
    let str = ''
    let queue = []
    queue.push(root)

    while(queue.length){
     
        let node = queue.shift()
        if(node){
            
            queue.push(node.left)
            queue.push(node.right)
            str+=node.val + ","
        }else{
            str+="#,"
        }
    }
    
    //1,2,3,#,#,4,5,#,#,#,#,
    return str

};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data) return null
    let dataList = data.split(',')
    let root = new TreeNode(dataList[0])
    let queue = []
    queue.push(root)
    let i = 1

    while(queue.length && i+1 < dataList.length){
        let node = queue.shift()

        if(node){
            node.left = dataList[i] == '#' ? null : new TreeNode(dataList[i])
            node.right = dataList[i+1] == '#' ? null : new TreeNode(dataList[i+1])

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        i+=2
    }

    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */