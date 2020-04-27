function* genetatorSeq() {
	yield 'first';
	yield 'second';
	yield 'third';
}
let genSeq = genetatorSeq();
console.log(genSeq.next()); //first
console.log(genSeq.next()); //second
console.log(genSeq.next()); //third

let arr = [1,2,3,4,5,6]
console.log(arr.slice(-1))

function throttle(fn,interval = 300){
    let canRun = true
    return function(){
        if(!canRun) return
        canRun = false
        setTimeout( () => {
            fn.apply(this,arguments)
            canRun = true
        },interval)
    }
}

function debounce(fn,interval = 300){
    let timeout = null
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this,arguments)
        },interval)
    }
}