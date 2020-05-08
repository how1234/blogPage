/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
    function quickSort(arr){
        if(arr.length <=1){
            return arr
        }
        let left = []
        let right = []
        let pivot = arr.splice(arr.length >> 1,1)

        
        for (let number of arr){
            if(number < pivot){
                left.push(number)
            }else{
                right.push(number)
            }
        }
        return quickSort(left).concat(pivot,quickSort(right))
        
    }
    return quickSort(arr).splice(0,k)
};