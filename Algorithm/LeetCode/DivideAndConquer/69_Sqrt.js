var mySqrt = function(x) {
    let top = x
    let bottom = 0

    while(bottom<=top){
       let middle = (top - bottom)/2
      

       if(middle === x/middle){
           return middle
       }else{
           if(middle > x/middle){
               top = middle - 1
               continue
           }else{
               bottom = middle + 1
               continue
           }
       }

    }
};

mySqrt(5)