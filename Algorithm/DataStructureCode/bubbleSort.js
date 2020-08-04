let bubbleSort = (inputArr) =>{
    let len = inputArr.length;

    for (let i = 0;i<len-1;i++){
        let flag = true
        for(let j = 0;j<len-1-i;j++){
            if(inputArr[j] > inputArr[j+1]){
                let temp = inputArr[j]
                inputArr[j] = inputArr[j+1]
                inputArr[j+1] = temp
                flag = false
            }
        }
        if(flag){
            break
        }
    }
    return inputArr
}

var arr = [3,5,6,2,3,4,1,2]

console.log(bubbleSort(arr))