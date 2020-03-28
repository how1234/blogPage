var levelOrder = function(root) {
    
    if (!root){
        return []
    }
    let levels = []
    let queue = []
    let level = 0
    queue.push(root)
    while(queue.length > 0){
        let levelSizes = queue.length
        let currentLevelNode = []
        levels[level] = currentLevelNode
        for(let i = 0;i<levelSizes;i++){

            let currentNode = queue.shift()

            levels[level][i] = currentNode.val
            
            if(currentNode.left) queue.push(currentNode.left)
            if(currentNode.right) queue.push(currentNode.right)
        }
        level+=1
    }
    return levels
    
};


var levelOrder = function(root) {
    
    if(!root){
        return []
    }
    let levels = []
    let helper = function(node,level){
        if(levels.length === level){
            levels.push([])
        }
        
        levels[level].push(node.val)

        if(node.left) helper(node.left,level+1)
        if(node.right) helper(node.right,level+1)
    }

    helper(root,0)
    return levels
    
};