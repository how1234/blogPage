function getData() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("get X");
    }, 1000);
  });
}

function getMoreData(x) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(x + " get Y");
    }, 1000);
  });
}

function getMoreMoreData(y) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(y + " get Z");
    }, 1000);
  });
}

getData()
  .then(function(x) {
    console.log(x);
    return getMoreData(x);
  })
  .then(function(y) {
    console.log(y);
    return getMoreMoreData(y);
  })
  .then(function(z) {
    console.log(z);
  })
  .catch(function(err) {
    console.log(err);
  });

let promise = new Promise((resolve, reject) => {

  resolve("Value!");
});

console.log(promise); //Promise { <rejected> 'Error!' }

promise.finally(
    console.log("done!") // done!
).then(function(value) {
  console.log(value); //Error!
});
