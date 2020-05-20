/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}

时间复杂度：遍历全部数组 (m+n)

空间复杂度：开辟了一个数组，保存合并后的两个数组 O(m+n)
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let lenOne = nums1.length
    let lenTwo = nums2.length
    let mergedArr = new Array()

    if(!lenOne){
        return getMid(nums2)
    }

    if(!lenTwo){
        return getMid(nums1)
    }
    let p1 = 0;
    let p2 = 0;

    while(p1 <= lenOne-1 && p2 <= lenTwo-1){
    
        if(nums1[p1] < nums2[p2]){
            mergedArr.push(nums1[p1])
            p1++
        }else if(nums1[p1] > nums2[p2]){
            mergedArr.push(nums2[p2])
            p2++
        }else{
            mergedArr.push(nums1[p1])
            mergedArr.push(nums2[p2])
            p1++
            p2++
        }

    }
     
  
    if(p1 === lenOne){ //如果第一个数组已经填充完毕。数组越界
        for(let i = p2;i<lenTwo;i++){
            mergedArr.push(nums2[i])
        }
    }else{
        for(let i = p1;i<lenOne;i++){
            mergedArr.push(nums1[i])
        }
    }

    return getMid(mergedArr)

    function getMid(mergedArr){
        let mid = mergedArr.length >> 1

        if(mergedArr.length % 2){ //长度为奇数
            return mergedArr[mid]
        }else{ //长度为偶数
            return (mergedArr[mid] + mergedArr[mid-1])/2
        
        }
    }
    
};