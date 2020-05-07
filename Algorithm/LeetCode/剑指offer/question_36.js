/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {

    let head, preNode;
    function dfs(curNode){
        if(!curNode) return
        dfs(curNode.left)
        if(!preNode){ //preNode不存在，意味着是链表起点
            head = curNode
        }else{ //如果存在就是中间点
            curNode.left = preNode
            preNode.right = curNode
        }
        preNode = curNode
        dfs(curNode.right)

    }
    
    if(!root) return 
    dfs(root)
    //遍历完之后，preNode节点应该是链表中最后一个点
    head.left = preNode
    preNode.right = head
    
    return head

};