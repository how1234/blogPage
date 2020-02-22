// Global module
var myModule = (function () {
 
    // Module object
    var modules = {},
      privateVariable = "Hello World";
   
    function privateMethod() {
      // ...
      console.log("hi")
    }
   
    modules.publicProperty = "Foobar";
    modules.publicMethod = function () {
      console.log( privateVariable );
    };
   
    return modules;
   
  })();


myModule.publicMethod()

