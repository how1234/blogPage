//input:
// 4 2 4 代表选手数量，2代表连胜次数
// 1 3 2 4 选手战斗力，不会出现相等状况
// 2 进行2场比赛


function solution(n,m,arr){
    let count = 0;
    let counter = 1;
    let currentPlayer = 0;
    
    while(counter < m){
        currentPlayer = arr[0];
        arr.shift()
        if(currentPlayer > arr[0]){
            let temp = arr[0]
            arr.shift()
            arr.push(temp)
            counter++
        }else{
            arr.push(currentPlayer)
            counter = 1
        }
        count++
    }
    return count
}


function solution1(n,m,arr){
    let count = 0;
    let counter = 1;
    let i = 0;
    while(counter < m){
        count++
        if(arr[i] > arr[i+1]){
            arr.push(arr[i+1])
            counter++
        }else{
            arr.push(arr[i])
            i++
            counter = 1
        }
       
    }
    
    return count
}




let n = 4
let m = 2
let arr = [1,3,2,4]

console.log(solution1(n,m,arr))