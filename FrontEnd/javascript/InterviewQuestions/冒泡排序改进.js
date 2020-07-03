function bubbleSort(arr){

    let lastSwap = 0;
    let lastSwapTemp = 0

    for(let i = 0;i<arr.length;i++){
        lastSwap = lastSwapTemp
        for(let j = 0; j<arr.length-i;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                lastSwapTemp = j + 1
            }
        }

        if(lastSwapTemp === lastSwap){
            break;
        }
    }

    console.log(arr)
}



bubbleSort([5,4,1,2,3,8,5,1])