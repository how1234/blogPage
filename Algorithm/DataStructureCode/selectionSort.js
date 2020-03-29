var selectionSort = function(inputArray){
    
    var len = inputArray.length

    for(let i = 0; i<len;i++){
        let min = i
        for(let j=i+1;j<len;j++){
            if (inputArray[j] < inputArray[min]){
                min = j
            }
        }

        if(min !== i){
            let temp = inputArray[min]
            inputArray[min] = inputArray[i]
            inputArray[i] = temp
        }
    }
    return inputArray
}



var arr = [3,5,6,2,3,4,1,2]

console.log(selectionSort(arr))