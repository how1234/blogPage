function useState(initialValue) {
    var _val = initialValue
    // no state() function
    function setState(newVal) {
      _val = newVal
    }
    return [_val, setState] // directly exposing _val
  }
  var [foo, setFoo] = useState(0)
  console.log(foo) // logs 0 without needing function call
  setFoo(1) // sets _val inside useState's scope
  console.log(foo) // logs 0 - oops!!