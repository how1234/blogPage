function foo() {
    console.log(this.a)
}

var a = 2;
var o = {a:3,foo:foo}
var p = {a:4}

o.foo() //3
let c = (p.foo = o.foo) //return a pointer to foo()

c() //2  equals to foo()