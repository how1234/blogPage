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
 */
var preorder = function(root) {
    let numbers = []
    
    if(!root) return numbers

    function helper(node){
        numbers.push(node.val)
        for(let el of node.children){
            helper(el)
        }

     
    }
    helper(root)

    return numbers
};