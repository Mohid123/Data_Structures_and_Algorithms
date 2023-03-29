// Linear Search that matches val

function findNumber(arr, val) {
  let i = 0;
  while (i < arr.length) {
    if(arr[i] === val) {
      return i
    }
    else {
      i++
    }
  }
  return -1
}
let timeA = performance.now();
console.log(findNumber([1,2,3,4,5,6,7,8,9, 10, 11, 12, 13 ,14], 14));
let timeB = performance.now();
console.log(`Time taken: ${(timeB - timeA) / 1000} seconds`);

// Binary Search 

function findNumberBinary(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let middle = Math.floor((left + right) / 2);
    let currentElem = arr[middle];
    if(currentElem > val) {
      right = middle - 1;
    }
    else if(currentElem < val) {
      left = middle + 1
    }
    else {return middle}
  }
  return -1
}
let time1 = performance.now();
console.log(findNumberBinary([1,2,3,4,5,6,7,8,9, 10, 11, 12, 13, 14], 14));
let time2 = performance.now();
console.log(`Time taken: ${(time2 - time1) / 1000} seconds`);