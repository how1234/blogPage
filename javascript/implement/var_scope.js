var a = 10
function foo(){
    console.log(a) //变量提升
    var a = 20
}
foo() // undefined

