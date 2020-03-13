var isEven = function(x) {
  console.log(x);
  return x % 2 === 0;
};

var numbers = [1, 2, 3, 4, 5, 6];

//every() 
//Iterates each elements of the array until the return of the function is false.
console.log(numbers.every(isEven));

//some()
//Iterates each elements of the array until the return of the function is true
console.log(numbers.some(isEven));

const result = numbers.reduce(function(previous, current, index, array) {
  return previous + current;
});

console.log(result);

//For n in array will return the index, "of" keyword will return the value 
for (let n of numbers) {
  console.log(n); // from 1 to 6
}


// It will print 1-6, then undefined. 
let iterator = numbers[Symbol.iterator]() //@@iterator property
var n=0
while(n<7){
    console.log(iterator.next().value);
    n++
}


let aEntries = numbers.entries() //return @@iterator
console.log(aEntries) //Object [Array Iterator] {}
console.log(aEntries[0]) //undefine
console.log(aEntries.next().value) // [0,1]

//form(), copy a array(1st parameter) with filter function(second paratmer)

let evens = Array.from(numbers, x => (x % 2 == 0))
console.log(evens) //[ false,true,false,true,false,true]


// fill. Fill with a specific number

let numbersCopy = Array.of(1,2,3,4,5,6); 

numbersCopy.fill(0)//[0,0,0,0,0,0]
numbersCopy.fill(2, 1); //[0,2,2,2,2,2] start from index 1 to fill


numbersCopy.fill(1, 3, 5); //[0,2,2,1,1,2]

console.log(numbersCopy) //[0,2,2,1,1,2] impure function


//find and include

let findNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];function multipleOf13(element, index, array) 
{  return (element % 13 == 0 ? true : false) }

console.log(findNumbers.find(multipleOf13)); //13
console.log(findNumbers.findIndex(multipleOf13)); //index 12

console.log(numbers.includes(15)); //true
console.log(numbers.includes(20)); //false
