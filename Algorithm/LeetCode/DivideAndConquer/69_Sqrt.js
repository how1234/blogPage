var mySqrt = function(x) {
    if(x < 2){
        return x
    }
    let left = 1
    let right = x
    while(left<=right){
        
       let mid = left+Math.floor((right-left)/2)
        let num = mid * mid
        if(num == x){
            return mid
        }else{
            if(num > x){
                right = mid - 1
            }else{
                left = mid + 1
            }
        }
        

    }
    return right
};
