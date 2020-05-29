/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //Divide and conquer

    function merge(left,right){
        let mergedArr = []
       
        let leftP = 0
        let rightP = 0; 
        while(leftP <= left.length-1 && rightP <= right.length-1){
            if(left[leftP] < right[rightP]){ //比较左右元素大小，先推小的
                mergedArr.push(left[leftP])
                leftP++
            }else{
                mergedArr.push(right[rightP])
                rightP++
            }
        }

        //如果有剩下的元素
        
        while(leftP <= left.length-1){
            mergedArr.push(left[leftP])
            leftP++
        }

        while(rightP <= right.length-1){
            mergedArr.push(right[rightP])
            rightP++
        }

        return mergedArr
    }
    
    function mergeSort(nums,left,right){

        if(left >= right){ //最小子数组，直接返回
            return [nums[left]]
        }

        let mid = (left+right) >> 1 //切割中点

        let leftArr = mergeSort(nums,left,mid)
        let rightArr = mergeSort(nums,mid+1,right)
        
        return merge(leftArr,rightArr)

    }

    
    return mergeSort(nums,0,nums.length-1)
};