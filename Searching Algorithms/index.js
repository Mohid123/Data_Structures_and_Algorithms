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

console.log(findNumber([1,2,3,4,5], 5))