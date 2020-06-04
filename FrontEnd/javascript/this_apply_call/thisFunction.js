function foo (num){
    console.log("foo:" + num)
    this.count++ //create a undefine value
}

foo.count = 0

foo(1)

console.log(this.count)