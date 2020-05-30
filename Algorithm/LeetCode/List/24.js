/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 时间复杂度O(N)
 * 空间复杂度O(1)
 * 
 */
var swapPairs = function(head) {

    let dumpNode = new ListNode(0)
    
    dumpNode.next = head
    let cur = dumpNode.next //记录下头
    let prev = dumpNode //记录前点

    while(cur){ 
        //当前对数
        let firstNode = cur; //记住当前对的前点和后点
        let secondNode = cur.next

        let nextPairStar;  //下一对的起点
 
        if(secondNode){
            //如果当前对的节点数数量为偶数，记录下下一对的起点。
            nextPairStar = secondNode.next
        }else{
            //如果当前对的节点数量为奇数，证明到头了，直接跳出。
            break;
        }

        //交换
        firstNode.next = secondNode.next 
        secondNode.next = firstNode
        prev.next = secondNode;
        
        
        //下一组
        if(nextPairStar){ //没到头
            prev = firstNode //因为原本的第一个节点已经被换到第二个了，将prev指向第一个节点
            cur = nextPairStar //当前节点接着往下滑
        }else{ //到头
            break;
        }
        
        
    }
    return dumpNode.next
};