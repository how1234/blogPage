window.a = "global a"

var obj = {
    a:1,
    getA:function(){
        console.log(this === obj) //false
        console.log(this === window) //true
        console.log(this.a) // global a
    }
}

var myGetAfunction = obj.getA

myGetAfunction()