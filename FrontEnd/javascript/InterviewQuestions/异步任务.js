function throlltle(fn,interval){
    let canRun = true

    return function(){
        if(!canRun) return
        canRun = false
        setTimeout(()=>{
            fn.apply(this,arguments)
            canRun = true
        },interval)
    }
}

function debounce(fn,interval){
    let timeout = null
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout( ()=>{
            fn.apply(this,arguments)
        },interval)
    }
}