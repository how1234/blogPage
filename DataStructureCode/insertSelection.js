function insertionSort(array){
    for (let i = 1;i<arr.length;i++){
        let j = i
        
        while(j > 0 && arr[j] < arr[j-1]){
            let temp = arr[j]
            arr[j] = arr[j-1]
            arr[j-1] = temp

            j--
        }
    }
    return arr
}
var arr = [3,5,6,2,3,4,1,2]
console.log(insertionSort(arr))