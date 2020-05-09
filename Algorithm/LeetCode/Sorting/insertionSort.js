let selectionSort = function (arr){
    
    for (let i = 1;i<arr.length;i++){
        let temp = arr[i]
        
        let j = i

        while(j > 0 && arr[j-1] > temp){
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = temp
    }
    console.log(arr)
    return arr
}
let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
selectionSort(arr)