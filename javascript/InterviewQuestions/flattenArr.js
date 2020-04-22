function flatten(arr){
    let res = []

    arr.map(item => {
        if(Array.isArray(item)){
            res = res.concat(flatten(item))
        }else{
            res.push(item)
        }
    })

    return res
}
let arr = [1, [2, 3, [4, 5]]]
console.log(flatten(arr))