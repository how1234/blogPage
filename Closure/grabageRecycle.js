
var addN;

function func1() {
  var n = 999;

  addN = function () {
    n += 1;
  };

  function func2() {
    console.log(n)
  }

  return func2;
}

var globalResult = func1();

globalResult(); // 999

addN();

globalResult(); // 1000
