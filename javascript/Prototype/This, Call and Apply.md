#`this`, `arrow function`,`call` and `apply` in JavaScript


The `this` keyword always points to an object, which is determined according to the *calling context*.


## 1. `this` Pointer

Excepting the uncommonly situation like `with` and `eval,` there are four standard situations the `this` keyword relates.
 
- Being called as a property of an Object.
- Being called as a function
- Being called as a constructor
- `Function.prototype.call` calling or `Function.prototype.apply` calling.



### Being called as a property of an Object

```

var obj = {
    a:1,
    getA:function(){
        console.log(this === obj) //true
        console.log(this.a) // 1
    }
}

obj.getA()


```

When a function is called as a property of an object, `this` points to this object.


Sometimes the `this` keyword could confuse. Please see the code pieces as follows.

```

 <body>
    <div id="div1">
      This is a div
    </div>
  </body>

  <script>
    window.id = "The id of window";

    document.getElementById("div1").onclick = function() {
      alert(this.id); //div1
      var that = this;

      var callback = function() {
        alert(this.id); //The id of window
      };
      callback();

      var callback1 = function() {
        alert(that.id); //div1
      };
      callback1();

      var callback2 = () => {
        alert(this.id); //div1
      };
      callback2();
    };
  </script>

```

We can see that the `this` in `callback()` is pointing to `window.` One way to solve this problem is by using one variable `that ` to keep the reference to `this,` which points to `div1`. Another way is **Arrow function**, we will analyze it in the following section.



### Being called as a normal function

When a function is called as a normal function, `this` keyword in the function is always pointing to the global object, which is `window` in browsers.

```
window.a = "global a"

var obj = {
    a:1,
    getA:function(){
        console.log(this === obj) //false
        console.log(this === window) //true
        console.log(this.a) // global a
    }
}

var myGetAfunction = obj.getA

myGetAfunction()

```



### Being called as a constructor.

When we use `new` keyword to call a function, which means this function is called as a constructor. Therefore, a constructor always returns an object, and `this` is pointing to this return object.

```
function myClass1() {
  this.name = "myName";
}

var obj1 = new myClass1();

console.log(obj1.name); //myName

```


However, when a function explicitly returns an object, the `this` keyword points to the returned object.

```
function myClass2() {
  this.name = `myName`;
  return {
    name: "explicit Name"
  };
}

var obj2 = new myClass2();

console.log(obj2.name); //explicit Name

```

If the function returns a non-object type value, it won't affect the `this` pointer.

```
function myClass3() {
  this.name = `myName`;
  return "explicit Name";
}

var obj3 = new myClass3();

console.log(obj3.name); //myName


```


### `Function.prototype.call` calling or `Function.prototype.apply` calling.

`call` and `apply` can dynamically change the `this` pointer and make it points to the passed object argument.

```
var obj1 = {
    name:'original name',
    getFunction:function(){
        return this.name
    }
}

var obj2 = {
    name:'new name'
}
var obj3 = {
    name:'Another name'
}


console.log(obj1.getFunction()) //original name
console.log(obj1.getFunction.apply(obj2)) //new name
console.log(obj1.getFunction.call(obj3)) //Another name

```



## 2.Arrow function

It differs from the traditional function; the traditional function gets the `this` according to the calling context. Still, the arrow functions keep the `this` of the context of `definition,` which is static and easy to understand. And it doesn't have its own `this` keyword.

The mechanism of `this` pointer in an arrow function is similar to the mechanism in variable searching. It looks through `this.name` from the current definition context up to the top definition context.


```
this.name="first layer" //equals to window.name = "first layer"

const first = () => {
    console.log("1 " +this.name) // 1 first layer
    this.name = "second layer" 
    const second = () => {
        console.log("2 " + this.name) //2 second layer
        this.name="third layer"
        console.log("3 " + this.name) //3 third layer
    }
    console.log("4 " + this.name) //4 second layer
    second()
}

const firstLayer = first()

```


```

var name="first layer" //window.name = "first layer"

const first = function(){
    console.log("1 " + name) // 1 first layer
    name = "second layer" 
    const second = function(){
        console.log("2 " + name) //2 second layer
        name="third layer"
        console.log("3 " + name) //3 third layer
    }
    console.log("4 " + name) //4 second layer
    second()
}

const firstLayer = first()

```


Then we back to see the previous example.


```
 <body>
    <div id="div1">
      This is a div
    </div>
  </body>

  <script>
    window.id = "The id of window";

    document.getElementById("div1").onclick = function() {
      alert(this.id); //div1 {1}
      var that = this;

      var callback = function() {
        alert(this.id); //The id of window
      };
      callback();

      var callback1 = function() {
        alert(that.id); //div1 
      };
      callback1();

      var callback2 = () => {
        alert(this.id); //div1 {2}
      };
      callback2();
    };
  </script>


```

The `this.id` in arrow function *{2}* is equals to the `this.id` *{1}* in definition context.  If you assign a new value to `this.id` between codes *{2}* and *{1}*, it will alert this value in *{2}*

```
<script>
    window.id = "The id of window";

    document.getElementById("div1").onclick = function() {
      alert(this.id); //div1
      var that = this;

      var callback = function() {
        alert(this.id); //The id of window
      };
      callback();

      var callback1 = function() {
        alert(that.id); //div1
      };
      callback1();
      this.id = "div2"
      var callback2 = () => {
        alert(this.id); //div2
      };
      callback2();
    };
  </script>
  
```



## 3.`Call` and `Apply.`

The only difference between `Call` and `Apply` is the format of the passed arguments. The format of passed arguments in `Apply` is *array*, and the argument number in `Call` is not fixed. 

```

var func = function(a,b,c){
    console.log(this) //global
    console.log([a,b,c])
}


func.apply(null,[1,2,3]) // [ 1, 2, 3 ]

func.call(null,1,2,3) //[ 1, 2, 3 ]



```



If we pass the `null` as the first parameter in `Apply` or `Call,` the `this` in function points to the global object.



### Usage of `Call` and `Apply`

#### Change the `this` pointer


```
var obj1 = {
    name: "obj1 name"
}

var obj2 = {
    name:"obj2 name"
}


var getName = function(){
    console.log(this.name)
}
 
getName() //undefined 
getName.call(obj1) //obj1 name
getName.apply(obj2) //obj2 name    

```


#### Implement `Function.prototype.bind()`

```
Function.prototype.bindImp = function(context) {
  var __self = this; // Keep the reference of this object(func)

  return function() {
    return __self.apply(context, arguments);
  };
};

var obj = { name: "obj name" };
var func = function() {
  console.log(this.name);
};




var funcBinded = func.bindImp(obj)
funcBinded()
```


#### Using the methods under others object.
 
```
var A = function(name) {
  this.name = name;
};

var B = function() {
  A.apply(this, arguments);
};

b.prototype.getName = function() {
  return this.name;
};

var b = new B("new name");

console.log(b.getName());

```
