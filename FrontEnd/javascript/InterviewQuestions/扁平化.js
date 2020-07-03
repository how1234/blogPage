Array.prototype.flat = function(){
    return [].concat(...this.map( (item) => {
        return Array.isArray(item) ? item.flat() : [item]   
    }))
}


Array.prototype.removeDuplicate = function(){
    return [...new Set(this)]
}

let arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[13,[14]]],10]]

let sortedArr = arr.flat().removeDuplicate().sort( (a,b) => (a-b))


console.log(sortedArr)


function flatten(arr){
    
    while(arr.some(item => (Array.isArray(item)))){
        
        arr = [].concat(...arr)
    }
    return arr
}

console.log(flatten(arr))

console.log(arr)
console.log(...arr)
console.log([...arr])
console.log([].concat(...arr))
