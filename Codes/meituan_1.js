var input1 = "1234567"
var input2 = "9 8 7 6 5 4 3 2 1"


function solution(input1,input2){
    
    let input2Arr = input2.split(' ')
    let str = ''

    input1 = input1.split('')
    if(input1[0] === '-'){
        str += '-'
        input1.shift()
    }
 


    for (var i = 0;i<input1.length;i++){
        
        let inputNumber = input1[i]
        
        let transferNumber = input2Arr[inputNumber-1]

        str+= String(transferNumber)
    }
    
    console.log(str)
}

solution(input1,input2)

solution('-12','2 3 7 6 5 4 3 2 1')