/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 * 时间复杂度O(N)
 * 空间复杂度O(N)
 */
var copyRandomList = function(head) {
    //dfs加回溯

    if(!head) return head
    let visited = new Map()

    function helper(node){
        if(!node) return node

        if(visited.has(node)){
           return visited.get(node)
        }

        let clone_node = new Node(node.val)
        visited.set(node,clone_node)

        clone_node.next = helper(node.next)
        clone_node.random = helper(node.random)

        return clone_node
    }

    helper(head)
    return visited.get(head)
    
};