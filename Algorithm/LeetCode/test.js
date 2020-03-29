var numberOne = "11";
var numberTwo = "1";

var flag = 0;


var result = ""
var s = 0
var i = numberOne.length - 1
var j = numberTwo.length - 1

while(i >= 0 || j>=0 || s === 1 ){
    s += (i>=0 ? numberOne.charAt(i) - '0': 0)
    s += (j>=0 ? numberOne.charAt(j) - '0': 0)

    result = (s%2 + '0') + result

    s/=2
    i--
    j--
}

console.log(result)