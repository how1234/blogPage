# Asynchronous, Promise, and `Await` and `Aynsc` keyword

Firstly, we need to confirm that asynchronous is a common and useful way in our developing process. The main reason why we need asynchronous is that some tasks need time to execute, such as fetching an image from a remote server, and we cannot freeze our application until we got it. 


## Asynchronous before ES6


The `Promise` is the new feature in ES6, and how the developers implement the asynchronous before ES6?



```

var function1 = function() {
  setTimeout(() => {
    console.log("function1 finish");
  }, 1000);
};

var function2 = function() {
  setTimeout(() => {
    console.log("function2 finish");
  }, 1000);
};

var function3 = function() {
  setTimeout(() => {
    console.log("function3 finish");
  }, 1000);
};

function1()

```

That's a simple way about how they use Asynchronous before ES6, but if  they want to meet such demands like they want to get some data first, and then using this return data to get others data, the code will be like these:

```
x = getData();
y = getMoreData(x);
z = getMoreData(y);

getData(function(x){
    //calculate y
    getMoreData(x, function(y){
    //calculate z
        getMoreData(y, function(z){ 
            ...
        });
    });
});


```

That's so-called "callback hell problem," this happens because if you want to delay a computation code, the only way to make it happen is that you put the delay into a callback function. 

##Promise

Promise used to solve this problem. It can change the callback hell in a chain method way.

Firstly, we should check what a promise consistent is. The function passed to `new Promise` is called *executor*. When `new Promise` is created, the executor runs automatically. Then it generates the result based on its code. There have two parameters in the callback function of this *executor* function, `resolve` and `reject.` When an *executor* gets the answer of its code, it should call one of these two callback functions to pass its result out.


There are two internal properties of a `promise` object:

- `state,` its initial value is `pending,` then changes to either `fulfilled` when `resolve` function is called, or `rejected` when `reject` function is called.
- `result,` its initial value is `undefined,` then changes to `value` when `resolve` called or `error` when `reject(error)` is called. 



We need to use Consumer to get the value in a promise whatever is `error.` 
or `value`. There are three types of Consumers: `then,` `catch`, and `finally.`


### Then

There have two parameters in the `then` function, which are all callback functions. The first function is called when a `promise` object has the status of `fulfilled`, and the second function is called when a `promise` object has the status of `rejected.`




```

let promise = new Promise((resolve,reject) => {
    resolve(5)
})

console.log(promise) //Promise { 5 }

promise.then(function(value){
    console.log(value) //5
},function(err){
    console.log(err) //doesn't run
})

```


```

let promise = new Promise((resolve,reject) => {
    reject(6)
})

console.log(promise) //Promise { 6 }

promise.then(function(value){
    console.log(value) //doesn't run
},function(err){
    console.log(err) //6
})

```


### Catch

`catch` is only being called when the `executor` called the `reject()` method. Also, it has the same effect as `then(null,errorHandlingFunction`.


```
let promise = new Promise((resolve,reject) => {
    reject("Error!")
})

console.log(promise) //Promise { <rejected> 'Error!' }

promise.catch(function(err){
    console.log(err) //Error!
})

```

### Finally
`finally` function has no arguments, and it is called when the status of a `promise` object is not `pending.`

Besides that, the `finally` function will passes through the `values` and `errors` to the next handler.

```

let promise = new Promise((resolve, reject) => { 
  reject("Error!");
});
promise.finally(
    console.log("done!") // done!
).catch(function(err) {
  console.log(err); //Error!
});

```
```
let promise = new Promise((resolve, reject) => {

  resolve("Value!");
});

console.log(promise); //Promise { 'Value!' }

promise.finally(
    console.log("done!") // done!
).then(function(value) {
  console.log(value); //Value
});

```

### Solving callback hell.

The code we mention in **Asynchronous before ES6** section can write as following code:

```javascript

function getData() {
  return new Promise(function(resolve, reject) {
      setTimeout( function(){
        resolve("get X");
      },1000)

  });
}

function getMoreData(x) {
  return new Promise(function(resolve, reject) {
    setTimeout( function(){
        resolve(x+" get Y");
      },1000)
  });
}

function getMoreMoreData(y) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve(y+ " get Z");
      },1000)

  });
}

getData()
  .then(function(x) {
      console.log(x)
    return getMoreData(x);
  })
  .then(function(y) {
      console.log(y)
    return getMoreMoreData(y);
  })
  .then(function(z) {
    console.log(z);
  }).catch( function(err){
      console.log(err)
  });



```

The output will be 

```

get X //1s later
get X get Y //2s later
get X get Y get Z //3s later

```

## `Async` and `Await`

`Async` and `Await` totally indeed change the way asynchrous in a synchrous way. 


The way we use `Async` keyword is like

```
function hello() { return "Hello" };
hello();

async function hello() { return "Hello" };
hello();

```

It looks the same,but the async function is actually returns a Promise