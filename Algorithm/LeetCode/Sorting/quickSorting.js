let quickSort = function(arr) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  main(arr, startIndex, endIndex);
  return arr;
  function main(arr, startIndex, endIndex) {
    if (startIndex < endIndex) {
      let index = partition(arr, startIndex, endIndex);
      main(arr, startIndex, index - 1);
      main(arr, index + 1, endIndex);
    }
  }

  function partition(arr, startIndex, endIndex) {
    let pivot = arr[startIndex];
    let left = startIndex;
    let right = endIndex;
    while (left !== right) {
      while (left < right && arr[right] > pivot) {
        right--;
      }
      while (left < right && arr[left] <= pivot) {
        left++;
      }

      if (left < right) {
        swap(arr, left, right);
      }
    }

    swap(arr, startIndex, left);
    return left;
  }

  function swap(arr, i, j) {
    [arr[i],arr[j]] = [arr[j],arr[i]]
  }
};

let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr));
