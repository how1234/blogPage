function flatten(arr){
    let res = []
    for(let i = 0;i<arr.length;i++){
        let element = arr[i]

        if(Array.isArray(element)){
            res = res.concat(flatten(element))
        }else{
            res.push(element)
        }
    }
    return res

}
console.log(flatten([1,2,3,[5,6,7,[8,9,[10,11]]]]))