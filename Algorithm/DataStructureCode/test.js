let arr = [3,6,7,2,1,0,0]


let bubbleSort = function(arr){
  for(let i = 0;i<arr.length-1;i++){
    let flag = false
    for(let j = 0;j<arr.length-i;j++){

      if(arr[j]> arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        flag = true
      }
    }  

    if(!flag){
      break
    }
  }

}


let selectionSort = function(arr){
  
  for(let i = 0;i<arr.length;i++){
    let minIndex = i;
    for(let j = i;j<arr.length;j++){

      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }

    [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]]
 

  }
  
}

let mergeSort = function(arr){

  
  let left = []
  let right = []


}
// bubbleSort(arr)
selectionSort(arr)
console.log(arr)