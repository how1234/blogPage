function promiseAll_Imp(promises){
    return new Promise( (resolve,reject) => {
        if(!Array.isArray(promises)){
            return reject("Arguments is not an array")
        }
        let promisesArr = new Array(promises.length).fill(0)
        let resolvedCount = 0
        

        for (let i = 0;i<promises.length;i++){
            Promise.resolve(promises[i]).then( (res) => {
                resolvedCount++
                promisesArr[i] = res
                if(resolvedCount === promises.length){
                    return resolve(promisesArr)
                
                }
            },(err) => {
                return reject(err)
            })

        }
    })
}


let promise1 = new Promise(function(resolve) {
    resolve(1);
  });
  let promise2 = new Promise(function(resolve,reject) {
    resolve(2);
  });
  let promise3 = new Promise(function(resolve) {
    resolve(3);
  });
  
  let promiseAll = promiseAll_Imp([promise1, promise2, promise3]);

   promiseAll.then((res) =>{
    console.log(res)
  }).catch( (err) => {
      console.log(err)
  })

//   let promiseAll = Promise.all([promise1, promise2, promise3]);
//    promiseAll.then(function(res) {
//       console.log(res);
// });
  