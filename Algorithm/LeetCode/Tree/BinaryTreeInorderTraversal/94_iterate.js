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
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var inorderTraversal = function(root) {
    let numbers = [];
    let stack = [];
    let cur = null

    if(!root) return []

    cur = root;

    while(stack.length || cur){ //如果cur存在就得一直不停的压栈，如果栈不为空就得把元素一直出栈
        
        while(cur){ //左子树全部入栈
            stack.push(cur)
            cur = cur.left 
        }

        cur = stack.pop()
        numbers.push(cur.val)

        cur = cur.right
     
    }

   
    return numbers
};