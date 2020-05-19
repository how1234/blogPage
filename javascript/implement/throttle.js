//在规定时间只触发一次

 function throttle(fn,delay){
     //用闭包保存时间
     let prev = Date.now()
    return function(){
        let context = this
        let now = Date.now()
        if(now - prev >= delay){
            fn.apply(context,[...arguments])
            prev = Date.now()
        }
    }
 }

 function fn(){
     console.log('节流')
 }

console.log(throttle(fn,5000)())


throttle(fn,5000)()
throttle(fn,5000)()
throttle(fn,5000)()