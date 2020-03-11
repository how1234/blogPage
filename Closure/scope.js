// var globalVariable = 100

// function func1(){
//     console.log(globalVariable) //100
// }

// func1()






// function func2(){
//     var variable = 100
//     variable2 = 100
// }

// func2()
// console.log(variable2) //100
// console.log(variable) //ReferenceError: variable is not defined




function func1(){
    var variable = 100
    console.log(variable2) //ReferenceError: variable is not defined
    function func2(){
        var variable2 =99
        console.log(variable) //100
    }
    
}



