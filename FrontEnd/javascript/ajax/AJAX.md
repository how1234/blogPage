# AJAX


## Single Thread

Only one thread, means JS can do one thing at one time.

Reason:
Avoid the conflict of Rendering DOM and executing JS.

So we need AJAX.

Why don't we use multiple thread:

1. Web browser can render DOM
2. JS can change DOM structure
3. So when JS executing, the rendering of browser should stop
4. Multiple JS codes could manipulate one DOM node.
5. webworker in HTML5 can support multiple thread, but it can't access DOM 

Key point: Don't let web page freeze.


```javascript
console.log(1)
alert('hello') //If you don't press OK, it won't print "2"
console.log(2)

```

```javascript
console.log(100)
setTimeout( ()=>{
    console.log(200)
},0)
console.log(300)
console.log(400)

//100 300 400 200

```
Synchornous codes execute first. Then asynchronous function execute(even after 0 second).


## Event-Loop
synchronous codes execute directly. (put codes in main thread)
Asynchronous codes puts in the asynchrounous queue, which is always monitored by JS engine. 
The mechanism is called Polling
After all synchronous codes execute, execute the codes in asynchrounous queue(put codes in main thread)


```javascript
console.log(100)
setTimeout( ()=>{
    console.log(200)
},0)
setTimeout( ()=>{
    console.log(300)
},100) //Put this callback function into asy queue after 100ms
console.log(400)
console.log(500)

```
## jQuery Deferred
jQuery 1.5 (released in 2011)

ajax before 1.5

```javascript
var ajax = $.ajax({
      url: "data.json",
      success: function() {
        console.log("success");
        console.log("success1")
      },
      error: function() {
        console.log("error");
      }
    });

console.log(ajax) // XHR object.
```

After 1.5 

```javascript
var ajax = $.ajax("data.json");
    ajax
      .done(function() {
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      .done(function(){
      	 console.log("success1")
      };
    console.log(ajax); deferred object
    
var ajax = $.ajax("data.json");


 var ajax = $.ajax("data.json").then(
      function() {
        console.log("success");
      },
      function() {
        console.log("error");
      }
    );

```

It is a syntatical sugar,and it didn't change the essence about single thread in Js.

(promise added in ES2015)

to meet open-closed principle


Deferred Object has two types of API
d.resolve(), d.reject()	

d.done() d.fail()


So that's why we have Promise, Promise can only passively monitoring.


## Promise

You can check the syntax in [ES6]()


```javascript
function loadImg(src) {
        var promise = new Promise((resolve, reject) => {
          var img = document.createElement("img");
          //   throw new Error("A error");
          img.onload = () => {
            resolve(img);
          };
          img.onerror = () => {
            reject("Error message");
          };
          img.src = src;
        });

        return promise;
      }

```


### Exception catch

```javascript
    var src =
        "https://api.jquery.com/jquery-wp-content/themes/jquery/content/donate.png";

    // var src ="https://api.jquery.com/jquery-wp-content/themes/jquery/content/donate11231.png"; //Wrong website
      var result = loadImg(src);
      result
        .then(
          function(img) {
            console.log(1, img.width);
            return img;
          }
        )
        .then(function(img) {
          console.log(2, img.height);
        })
        .catch((error) => {
          console.log(error);
        });

```

### Connection in serial

```javascript
var src1 =
        "https://api.jquery.com/jquery-wp-content/themes/jquery/content/donate.png";
      var result1 = loadImg(src1);
      var src2 =
        "https://jquery.com/jquery-wp-content/themes/jquery/content/books/jquery-succinctly.jpg";
      var result2 = loadImg(src2);
      result1
        .then(function(img1) {
          console.log("First image loaded", img1.width);
          return result2; // must return
        })
        .then(function(img2) {
          console.log("Second image loaded", img2.width);
        })
        .catch(function(ex) {
          console.log(ex);
        });

```

### race() and all()

```javascript
var src3 =
        "https://api.jquery.com/jquery-wp-content/themes/jquery/content/donate.png";
      var result3 = loadImg(src3);
      var src4 =
        "https://jquery.com/jquery-wp-content/themes/jquery/content/books/jquery-succinctly.jpg";
      var result4 = loadImg(src4);
      Promise.all([result3, result4]).then(function(datas) {
        console.log("all", datas[0]);
        console.log("all", datas[1]);
      });
      Promise.race([result3, result4]).then(function(data) {
        console.log("race", data);
      });

```

### status

1. pending(inital status)
2. fulfilled
3. rejected

The status is irreversible

### then()

then can have two parameters, first parameter is the success function, and second parameter is the failed callback function.
then() return a instance of Promise
## Async/Await

ES7

await/async is a writing asychronous codes in synchronous way, which has no call back function.

syntax

```javascript
const load = async function(){
	const result1 = await loadImg(src1)
	const result2 = await loadImg(src2)
	
}
load()

```

You need to install **babel-polyfill** to support it.


