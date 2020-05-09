function quickSort(arr){
    if(arr.length <= 1){
        return arr 
    }

    let left = [],
    right = [],
    pivot = arr.splice(arr.length>>1,1)
    
    for (let i = 0;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(pivot,quickSort(right))
}

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr));