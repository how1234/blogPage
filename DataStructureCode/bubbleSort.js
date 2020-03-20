let bubbleSort = (inputArr) =>{
    let len = inputArr.lengh;

    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            if(inputArr[j]>inputArr[j+1]){
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr
}