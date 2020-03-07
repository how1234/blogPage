function restParamaterFunction(x, y) {
  var a = Array.prototype.slice.call(arguments, 2); // (Object.values(arguments).slice(2))

  return (x + y) * a.length;
}

console.log(restParamaterFunction(1, 2, "hello", true, 7));

function ES6restParamaterFunction(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(ES6restParamaterFunction(1, 2, "hello", true, 7));
