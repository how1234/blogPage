var obj1 = {
    name: "obj1 name"
}

var obj2 = {
    name:"obj2 name"
}


var getName = function(){
    console.log(this.name)
}
 
getName() //undefined 
getName.call(obj1) //obj1 name
getName.apply(obj2) //obj2 name