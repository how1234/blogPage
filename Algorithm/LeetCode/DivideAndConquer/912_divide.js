/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //Divide and conquer
    function mergeSort(nums,left,right){
        if(left >= right){ //最小子数组，直接返回，不做操作
            return
        }
        
        //对于不是最小子数组的，做一个合并
        let mid = (left+right) >> 1 //切割中点

        mergeSort(nums,left,mid)
        mergeSort(nums,mid+1,right)

        //能运行到这个位置的一定不是子数组，而且必有两个子数组，对两个子数组进行一个合并
        
        let temp = []
        let leftP = left;//左子数组指针从left开始
        let rightP = mid+1;  //右子数组指针从mid+1开始
        
        while(leftP <= mid && rightP<=right){ 
            if(nums[leftP] < nums[rightP]){ //左边小于右边
                temp.push(nums[leftP])
                leftP++
            }else{ //左边大于右边
                temp.push(nums[rightP])
                rightP++
            }
        }
        while(leftP <= mid){
            temp.push(nums[leftP])
            leftP++
        }
        
         while(rightP <= right){
            temp.push(nums[rightP])
            rightP++
        }
        //写入原数组，拿[5,2,3,1]来说
        //第一次合并是合并[5]和[2]
        //此时left是0，right是1,
        //nums[0..1]应该变成[2,5]
        nums.splice(left,temp.length,...temp)


    }

 
    mergeSort(nums,0,nums.length-1)
    return nums
};