
function createCounter() {
  var counter = 0
  const myFunction = function() {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
counter = 11
const c3 = increment();
console.log("example increment", c1, c2, c3);
