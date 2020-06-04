//把一个多参数的方法，改造成只接受单一函数的方法，并返回接受剩下参数的新函数。

function curryingHelper(fn, args) {
  let requiredLength = fn.length; //形参数量，只执行一次
  args = args || [];
  return function(...rest) {
    let _args = args.concat(...rest);

    if (_args.length >= requiredLength) {
      fn.apply(this, _args);
    } else {
      return curryingHelper.call(this, fn, _args);
    }
  };
}
function test(a, b, c, d) {
  console.log(a + b + c + d);
}
let handle = curryingHelper(test);
handle(1)(2)(3)(4);
handle(1, 2)(3, 4);
handle(1, 2, 3)(4);
handle(1)(2, 3, 4);
