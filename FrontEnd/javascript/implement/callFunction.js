Function.prototype.myCall = function(context){
    if(typeof this !== "function"){
        throw new TypeError('not function')
    }
    
    let context = context || window
    context.fn = this
    let args = [...arguments].slice(1)
    let result = context.fn(args)
    delete context.fn

    return result    
}

var obj= {
    sData : "aaa"
}



function display() {
  console.log('sData value is %s ', this.sData);
}

display.call(obj);  // sData value is Wisen