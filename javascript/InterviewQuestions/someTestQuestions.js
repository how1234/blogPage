
//1.
// let x = {
//     a:1,
//     b:2
// }

// const arr = []
// for (let i in x){
//     arr.push(x[i])
// }

// console.log(arr)


// console.log("ABc".split("").reverse().join(""))


// const obj = {
//     a:1,
//     b:2,
//     getA(){
//         console.log(this.a)
//         return this
//     },
//     getB(){
//         console.log(this.b)
//     }
// }
// obj.getA().getB()


// Array.prototype.print = function(){
//     // console.log(this.join(","))
//    this.forEach( (e,i) => {
//        console.log(e+",")
//    })
// }


// new Array([1,2]).print();




const a = function(x){
    this.x = x
}
a.prototype = {
    getX(){
        return this.x
    }

}

const b = function(x,y){
    
    this.y = y
    a.call(this,x)
    
    getY = () =>{
        return this.y;
    }
}

let newB = new b(x,y)



