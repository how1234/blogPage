function removeElement(arr){
    return arr.filter( (element,index) =>  arr.indexOf(element) === index)
}

function removeElement1(arr){
    return [...new Set(arr)]
}



var testArr = [1,2,3,4,5,6,6,6,6,1,3]

console.log(removeElement(testArr))

console.log(removeElement1(testArr))