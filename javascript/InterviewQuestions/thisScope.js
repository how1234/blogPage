const myObject = {
    myArrowFunction: () => console.log(this),
    myMethod: function () {
       console.log(this) ;
    }
  };

myObject.myMethod() // this === myObject
myObject.myArrowFunction() // this === window

