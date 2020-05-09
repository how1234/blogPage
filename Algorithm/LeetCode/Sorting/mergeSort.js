var mergeSort = function(arr){

    if(arr.length < 2) return arr

    let mid = arr.length >> 1
    let left = arr.slice(0,mid)
    
    let right = arr.slice(mid)

    return merge(mergeSort(left),mergeSort(right))
    
}

function merge(left,right){
    let result = []
    while(left.length > 0 && right.length > 0){
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }

    if(left.length > 0){
        result.push(...left)
    }

    if(right.length > 0){
        result.push(...right)
    }
    
    return result
}

let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]

console.log(mergeSort(arr))