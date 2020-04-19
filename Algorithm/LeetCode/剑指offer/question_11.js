/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    if(numbers.length === 0){
        return
    }
    let start = 0;
    let end = numbers.length - 1
    while(start < end){
          let mid = (start+end) >> 1
          if(numbers[mid] > numbers[end]){ //答案在[mid+1,end]区间内
                start = mid + 1
            }else if(numbers[mid] < numbers[end]){ //答案在[start,mid]区间内
                end = mid
            }else{ //无法判断，缩小范围
                end = end-1
            }
    }
  
    return numbers[start]   
};