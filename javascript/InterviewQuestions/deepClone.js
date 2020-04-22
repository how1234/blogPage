function deepClone(obj){
    if(obj === null) return null
    if(obj instanceof RegExp) return new RegExp(obj)
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof Array) return Array.from(obj)
    if(typeof obj ==="Function") return new function(obj){}

    if(typeof obj !== "object"){
        return obj
    }
    

    let newObj = {}
    for(let key in obj){
        newObj[key] = deepClone(obj[key])
    }
    return newObj
}

var obj={
    name:'xm',
    birth:new Date,
    desc:null,
    reg:/^123$/,
    ss:[1,2,3],
    fn:function(){
      console.log('123')
    }
  }



console.log(deepClone(obj))