let bubbleSort = function(arr){
    
    for (let i=0;i<arr.length;i++){
        for(let j = 0;j<arr.length-i;j++){
            if(arr[j] > arr[j+1]){
                let temp  = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
       
    }
    console.log(arr)
    return arr
}
let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
bubbleSort(arr)

