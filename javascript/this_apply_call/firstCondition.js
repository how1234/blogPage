var obj = {
    a:1,
    getA:function(){
        console.log(this === obj) //true
        console.log(this.a) // 1
    }
}

obj.getA()