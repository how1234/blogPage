/**
 * Initialize your data structure here.
 */

function ListNode(val){
    this.val = val
    this.next = null
}
var MyLinkedList = function() {
    this.dummyNode = new ListNode(0)
    this.len = 0;
    
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
    let cur = this.dummyNode.next
    
    while(cur && index){
        cur = cur.next
        index--
    }
    if(!cur){
        return -1
    }
    return cur.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let prevHead = this.dummyNode.next
    this.dummyNode.next = new ListNode(val)
    
    this.dummyNode.next.next = prevHead
    this.len +=1
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let cur = this.dummyNode.next

    while(cur.next){
        cur = cur.next
    }
    cur.next = new ListNode(val)
    this.len +=1;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
 


    if(index<=0){
        let temp = this.dummyNode.next
        this.dummyNode.next = new ListNode(val)
        this.dummyNode.next.next = temp   
        this.len+=1
        return      
    }

    if(index >= this.len){
        this.addAtTail(val)
        return 
    }


    let cur = this.dummyNode

    while(cur && index){
        cur = cur.next
        index--
    }
    
    //参考1->2->3
    let temp = cur.next
    cur.next = new ListNode(val)
    cur.next.next = temp
    this.len+=1

};  

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    
    if(index < this.len){
        let cur = this.dummyNode

        while(cur && index){
            cur = cur.next
            index--
        }
        let temp = cur.next.next
        cur.next = temp
        this.len-=1
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */