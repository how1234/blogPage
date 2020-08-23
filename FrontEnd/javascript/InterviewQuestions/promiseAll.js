
Promise.prototype.all = function(list){
    
    return new Promise( (resolve,reject) => {
        let count = 0
        let resArray = []
        for(let i in list){
            let p = list[i]

            resolve(p).then(res => {
                count++
                resArray[i] = res

                if(count === list.length){
                    resolve(resArray)
                }
            }, err => {
                reject(err)
            })
        }
    })

    
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

