/**
 * @param {number[]} nums
 * @return {number}
 * 空间复杂度O(N)
 * 时间复杂度O(NlogN)
 */
var reversePairs = function(nums) {
    let sum = 0
    mergeSort(nums)
    return sum
    function mergeSort(nums){
        if(nums.length <= 1){
            return nums
        }

        let mid = nums.length >> 1
        let leftArr = nums.slice(0,mid)
        let rightArr = nums.slice(mid)
        
        return merge(mergeSort(leftArr),mergeSort(rightArr))
        
    }

    function merge(left,right){
        
        let leftLen = left.length
        let rightLen = right.length
        let resLen = leftLen + rightLen
        let res = new Array(resLen)

        for(let i=0,j=0,index=0;index<resLen;index++){
            if(i >= leftLen){ //如果左边数组的索引已经超过左边数组的长度，意味着剩下的数都在右边数组中
                res[index] = right[j]
                j++
            }else if(j >= rightLen){ //如果右边数组的右边已经超过左边数组的长度，意味着剩下的数都在左边数组中
                res[index] = left[i]
                i++
            }else if(left[i] <= right[j]){ //右边数组的当前数大于或者等于左边数组的当前数
                res[index] = left[i]
                i++
            }else{ //左边数组的当前数大于右边数组的当前数
                res[index] = right[j]
                //这意味着左边数组当前的数字以及剩下的数字都大于右边当前所比较的数字，所以都可以组成逆序对
                sum += leftLen - i
                j++
            }

        }
        return res
        
    }
};