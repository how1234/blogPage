var SingletonBuilder = (function() {
  let instance; //The singleton instance

  function Singleton(params) {
    
    this.params = params;
  }

  let publicMethod = function() {
    if (!instance) {
      instance = {};
    }
    return instance;
  };

  let publicMethod2 = function(params){
        instance = new Singleton(params)
  }

  return { getInstance: publicMethod,
           setInstance: publicMethod2 };
})();
SingletonBuilder.setInstance("123");
var obj = SingletonBuilder.getInstance();

console.log(obj.params); //123


