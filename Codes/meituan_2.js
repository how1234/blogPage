



var arr = "1 2 3 4 5".split(' ')
function solution(n){
    

    if(n === 1){
        return Math.PI * 1
    }
    let sum = 0

    for(var i=arr.length-1;i>=0;i-=2){
			
        if(i !== 0){
            sum += Math.pow(arr[i],2) * Math.PI - Math.pow(arr[i-1],2) * Math.PI
        }else{
            if(n % 2 ===1){
                sum += Math.pow(arr[i],2) * Math.PI
            }
          
        }
  

    }
    console.log(sum.toFixed(5))
}


solution(5)