//模仿块级作用域
function outputNumbers(count) {
  for (var i = 0; i < count; i++) {
        
  }
  console.log(i); //3
  var i; //i对后续声明视而不见
  console.log(i); //3
}

outputNumbers(3)

//模仿块级作用域
function outputNumbers1(count) {
        (function(){
            for (var i = 0; i < count; i++) {
                console.log(i)
            }
        })()


    
    console.log(i); //undefine
    var i;
    console.log(i); //undefine
  }
  
outputNumbers1(3)