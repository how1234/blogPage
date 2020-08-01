/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 * 后序遍历 左 右 根
 * 从下到上，从右到左
 * 那么输出的时候可以从上到下，从左到右，然后逆序即可
 */
var postorder = function(root) {
    let numbers = []
    let stack = []

    if(!root) return numbers

    stack.push(root)

    while(stack.length){
        let node = stack.pop()
        numbers.push(node.val)

        let childrenList = node.children
        stack.push(...childrenList)
        
    }
    
    return numbers.reverse()
};