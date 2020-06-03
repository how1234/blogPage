/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {

    if(!root) return root//空树直接返回

    //删除节点有三种情况
    
    if(key < root.val){ //如果要删除的节点的值比根节点的值小，意味着待删除节点在根子树左子树中
        root.left = deleteNode(root.left,key)
        return root
    }else if(key === root.val){ //如果要删除的是根节点
        if(!root.left) return root.right //如果左子树为空，直接返回最近右子树的节点作为新节点
        if(!root.right) return root.left //如果右子树为空，直接返回最近左子树的节点作为新节点

        
        //如果左右子树都存在的话，找到右子树的最小节点来作为新的根节点
        let new_root = findRightMinAndMoveToRoot(root.right)
        new_root.left = root.left
        return new_root


    }else{ //如果要删除的节点的值比根节点的值大，意味着待删除节点在根节点的右子树中
        root.right = deleteNode(root.right,key)
        return root
    } 
    
    //找到当前树的最小值，也就是一直往左子树找，找到底
    function findRightMinAndMoveToRoot(root){
        if(!root.left) return root //如果已经是最小的，返回
        
        let cur = root.left //当前节点的左子树
        let pre = root //记录下当前节点

        while(cur.left){ //一直迭代到左子树不存在
            pre = cur
            cur = cur.left
        }
        //此时cur为该树的最小节点，pre为这个节点的父节点，pre.left === cur

        
        
        pre.left = cur.right 
        cur.right = root
        return cur
    }
   
};