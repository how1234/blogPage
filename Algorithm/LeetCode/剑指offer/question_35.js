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
 */
var copyRandomList = function(head) {
    let visited = new Map()

    function dfs(node){
        if(!node) return null
        if(visited.has(node)){
            return visited.get(node)
        }
        let copy = new Node(node.val,null,null)
        visited.set(node,copy)

        copy.next = dfs(node.next)
        copy.random = dfs(node.random)
        return copy
    }

    return dfs(head)
};

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
 * bfs
 */
var copyRandomList = function(head) {
    let visited = new Map()
    function bfs(head){
        
        if(!head) return head

        let queue = []
        let copy = new Node(head.val,null,null)
        queue.push(head)
        visited.set(head,copy)

        while(queue.length > 0){
            let temp = queue.shift()

            if(temp.next){
                if(!visited.has(temp.next)){
                    let tempNode = new Node(temp.next.val)
                    visited.set(temp.next,tempNode)
                    queue.push(temp.next)
                }
                visited.get(temp).next = visited.get(temp.next)
            
            }

            if(temp.random){
                if(!visited.has(temp.random)){
                    let tempNode = new Node(temp.random.val)
                    visited.set(temp.random,tempNode)
                    queue.push(temp.random)
                }
                visited.get(temp).random = visited.get(temp.random)
            }
        }

        return copy
    }

    return bfs(head)
};