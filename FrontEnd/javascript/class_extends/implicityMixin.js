var Something = {
    cool:function(){
        this.greeting = "Hello World"
        this.count = this.count? this.count+1:1
    }
}


Something.cool();
console.log(Something.greeting); //"Hello World"
console.log(Something.count)


var Another = {
    cool: function(){
        //Implicity mix Something into Another
        Something.cool.call(this)
    }
}

Another.cool()
console.log(Another.greeting) //"Hello World"
console.log(Another.count) //1
