function foo() {
    return Promise.resolve().then( () => 
    {
        console.log(1)
        foo()
    }
    );
  };    

  function bar(){
      setTimeout(()=>{
          console.log(2)
      },0)
  }
  bar()
  foo()