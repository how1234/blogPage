Promise.prototype.race = function(list){

    return new Promise((resolve,reject) => {

        for(let el of list){
            resolve(el)
        }
    })
}


const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
  });


const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 50, 'three');
  });
  

  
  Promise.race([promise1, promise2,promise3]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });
  // expected output: "two"
  