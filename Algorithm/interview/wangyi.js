

function findGCD(a,b){
    if(b === 0){
        return a
    }
    return findGCD(b,a%b)
}




function answer(arr){
    
    let arrOfGCD = []

    let minusArr = []

    for (let i = 1;i<arr.length;i++){
        minusArr.push(arr[i] - arr[i-1])
    }

    for (let i = 1;i<minusArr.length;i++){
        arrOfGCD.push(findGCD(minusArr[i],minusArr[i-1]))
    }
 
    let answer = Math.min(...arrOfGCD)
    if(answer < 0){
        return -1
    }else{
        return answer
    }
    
}


let arr = '1 3 7 5'.split(' ')
console.log(answer(arr))



