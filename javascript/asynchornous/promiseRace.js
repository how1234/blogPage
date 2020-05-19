function promiseRace_imp(promises){
    return new Promise((resolve,reject) => {
        if (!Array.isArray(promises)){
            return reject("its not a array")
        }
        for (let i = 0;i<promises.length;i++){
            Promise.resolve(promises[i]).then((res) => {
                return resolve(res)
            },(err) => {
                return reject(err)
            })
        }
    }
)}
    

const p1 = new Promise(function (resolve) { setTimeout(resolve, 200, 1) })
const p2 = new Promise(function (resolve) { setTimeout(resolve, 100, 2) })
promiseRace_imp([p1, p2]).then(function (res) { console.log(res) }) // 2