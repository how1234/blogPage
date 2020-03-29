function BinarySearchTree(){
    let rootNode = null;
    function Node(val){
        this.leftNode = null
        this.val = val
        this.rightNode = null
    }

    
    this.insert = function(nodeVal){
        let node = new Node(nodeVal)

        if (rootNode === null){
            rootNode = node
        }else{
          
            insertNode(rootNode,node)
        }
    

    }
    var insertNode = function(node,newNode){

        if(newNode.val >= node.val){
            if(node.rightNode === null){
                node.rightNode = newNode
            }else{
                insertNode(node.rightNode,newNode)
            }
        }else{
            if(node.leftNode === null ){
                node.leftNode = newNode
            }else{
                insertNode(node.leftNode,newNode)
            }
        }
    }
    
    this.inOrderTraversal = function () {
        inOrderTraversalNode(rootNode)
    }
    var inOrderTraversalNode = function(node){
        if(node){
            inOrderTraversalNode(node.leftNode)
            console.log(node.val)
            inOrderTraversalNode(node.rightNode)
        }
    }

    this.preOrderTraversal = function(){
        preOrderTraversalNode(rootNode)
    }

    var preOrderTraversalNode = function(node){
        if(node){
            console.log(node.val)
            preOrderTraversalNode(node.leftNode)
            preOrderTraversalNode(node.rightNode)
        }
    }

    this.postOrderTraversal = function(){
        postOrderTraversalNode(rootNode)
    }

    var postOrderTraversalNode = function(node){
        if(node){
            postOrderTraversalNode(node.leftNode)
            postOrderTraversalNode(node.rightNode)
            console.log(node.val)
        }
    }
}

var tree = new BinarySearchTree()
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)

tree.insert(6)

tree.inOrderTraversal()
tree.preOrderTraversal()
tree.postOrderTraversal()
