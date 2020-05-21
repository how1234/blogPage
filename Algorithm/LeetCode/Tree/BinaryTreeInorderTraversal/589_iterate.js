/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 * 前序遍历 根 左 右
 * 先输出根
 * 然后压栈的时候从右到左压，输出就是从左到右输出
 */
var preorder = function(root) {
    let numbers = []
    let stack = []

    if(!root) return numbers

    stack.push(root)

    while(stack.length){
        let node = stack.pop()
        numbers.push(node.val)

        let childrenList = node.children.reverse()
        stack.push(...childrenList)
        
    }
    
    return numbers
};