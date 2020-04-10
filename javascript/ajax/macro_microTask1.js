let arr = [1,2,3]

async function func1(){
    arr.forEach(async function(element){
        return await new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log(element)
                resolve(element)
            }, (3-element) *100);
        })
    });

    arr.forEach(element => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log(element)
                resolve(element)
            }, (3-element) *100);
        })
    });

}

func1()