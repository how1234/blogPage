var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length){
        return null
    }
    let root = preorder[0] //前序遍历的第一位为根结点
    let node = new TreeNode(root)
    let index;
    for(let i = 0;i<inorder.length;i++){
        if(inorder[i] === root){
            index = i
            break;
        }
    }
    //中序遍历到root节点，在root节点之前除了根结点之外，有index个节点，所以前序遍历是slice(1,index+1)
    //中序遍历到root节点，之前为左子树，并且有index个节点，所以中序遍历是slice(0,index)
    node.left = buildTree(preorder.slice(1,index+1),inorder.slice(0,index)) 

    //中序遍历到root节点，在root节点之后为右子树，并且有index个节点，所以前序遍历是slice(1+1)
    //中序遍历到root节点，之后为友子树，并且有index个节点，所以中序遍历是slice(index+1)
    node.right = buildTree(preorder.slice(index+1),inorder.slice(index+1)) 
    
    return node
}
