/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 
 */
var inorderTraversal = function(root) {
    let res = []
    let stack = []
    //二叉树的中序遍历，先左，再中，再右
    
    //先把左节点入栈
    //弹出来访问左节点，最后入的最先访问（所以最先访问的是最左节点）
    //然后再把右节点入栈
    if(!root) return res
    
    let p = root


    while(stack.length || p){
        if(p){
            stack.push(p)
            p = p.left
            
        }else{
            //左节点入完了，弹出访问
            p = stack.pop()
            res.push(p.val)
            
            //到右节点
            p = p.right
            
        }
        

    }


  
    
    return res
};  