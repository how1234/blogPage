var function1 = function() {
  setTimeout(() => {
    console.log("function1 finish");
    function2()
    
  }, 1000);
};

var function2 = function() {
  setTimeout(() => {
    console.log("function2 finish");
    function3()
  }, 1000);
};

var function3 = function() {
  setTimeout(() => {
    console.log("function3 finish");
  }, 1000);
};

function1()