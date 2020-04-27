let p1 = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(1)
        },1000)
    })
}

let p2 = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(2)
        },1000)
    })
}


function* gen(){
    let x = yield p1()
    console.log(`x:${x}`)
    let y = yield p2()
    console.log(`y:${y}`)
}


function run(gen){
    let it = gen()
    return Promise.resolve(it.next()).then(
       function handleNext(next){
            if(next.done) return
            return Promise.resolve(next.value).then( (res) => {
                handleNext(it.next(res))
            })
       }
    )
}

async function offical_gen() {
    let x = await p1();
    console.log(`x: ${x}`);
    let y = await p2();
    console.log(`y: ${y}`);
}
let gene = gen()
console.log(gene.next())
console.log(gene.next())
console.log(gene.next())
run(gen)