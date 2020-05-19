/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 时间复杂度O(kN)
 */

var maxSlidingWindow = function(nums, k) {
    if (k <= 1) return nums;
    const res = [];
    for (let i = 0; i < nums.length - k + 1; ++i) {
        res.push(Math.max(...nums.slice(i, i + k)));
    }
    return res;
};


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function(nums, k) {
    if (k <= 1) return nums;
    const res = [];
    for (let i = 0; i < nums.length - k + 1; ++i) {
        res.push(Math.max(...nums.slice(i, i + k)));
    }
    return res;
};





/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 * 时间复杂度O(N)
 * 空间复杂度O(k)
 * 核心思想就是维持一个双端队列，首部为当前窗口最大值的下标
 */

var maxSlidingWindow = function(nums, k) {
    //双端队列保存元素下标

    let dequeue = []
    if (!k) return []
    const len = nums.length

    if(!len) return []


    for(let i = 0;i<k;i++){
        cleanDeque(i,k)
        dequeue.push(i)
    }

    const res = []
    res.push(nums[dequeue[0]])

    for (let i = k; i<len;i++){
        cleanDeque(i,k)
        dequeue.push(i)
        res.push(nums[dequeue[0]])
    }

    function cleanDeque(index,k){
        //每次加入新元素之前要进行两个检查

        //1.如果双向队列的首部超出窗口，直接出队
        if(dequeue.length && index >= k + dequeue[0]){  
            dequeue.shift()
        }

        //2.如果添加进来的最后一个数大于双端队列的最后一个数，最后一个数出列
        while(dequeue.length && nums[index] > nums[dequeue[dequeue.length-1]]){
            dequeue.pop()
         }
    }
    return res
};


