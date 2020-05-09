var selectionSort = function(arr){
    let minIndex = 0;

    for (let i = 0;i<arr.length;i++){
        minIndex = i
        for(let j = i+1;j<arr.length;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    console.log(arr)
    return arr
}

let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
selectionSort(arr)