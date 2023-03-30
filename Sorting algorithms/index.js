// Bubble Sort
function bubbleSort(arr) {
  let noSwaps = false;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j+1], arr[j]];
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr
}

console.log(bubbleSort([12,3,4,6,1,23,4,5,8,0,9]))