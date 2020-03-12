# Asynchronous, Promise, and `Await` and `Aynsc` keyword

Firstly, we need to confirm that, aysnchrounous is very common and useful way in our deleveloping process. The main reason why we need aysnchrounous is that some tasks need time to executing such as fetching image from remote server, and we cannot freeze our application until we got it. 


## Asynchrounous before ES6


Promise is the new feature in ES6, and how the developers implement the asynchrounous before ES6?



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

That's a simple way about how they use Asynchornous before ES6, but if they want to do such things, like they want to meet such demands like they want get some data first, and then using this return data to get others data, the code will be like these:

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

That's so called "callback hell problem", this happens because if you want to delay a computation code, the only way to make it happen is that you put the delayed into a callback function. 



