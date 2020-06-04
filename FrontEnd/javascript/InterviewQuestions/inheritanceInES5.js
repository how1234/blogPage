
function Parent(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Parent.prototype.methodOne = function(x, y) {
    this.x += x;
    this.y += y;
  }
  

  function Children(x, y, r) {
    Parent.call(this, x, y);
  
    this.r = r;
  }
  
  Children.prototype = Object.create(Parent.prototype);

  Children.prototype.constructor = Children;
  
