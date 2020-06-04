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
    //两遍遍历

    if(!head) return head
    let visited = new Map()
    let cur = head
    
    //第一遍根据next指针把新老节点过一遍，并建立新老节点映射
    
    while(cur){
        let clone_cur = new Node(cur.val)
        visited.set(cur,clone_cur)
        cur = cur.next
    }


    cur = head

    //第二遍建立克隆节点和它的各指针指向的克隆节点的联系
    while(cur){
  
        visited.get(cur).random =  visited.get(cur.random) || null
        visited.get(cur).next = visited.get(cur.next) || null
        cur = cur.next
    }
    
    return visited.get(head)
    
};