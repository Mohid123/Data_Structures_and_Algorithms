// Bubble Sort -- Places the largest values at the end in order. So values accumulate at the end of array
function bubbleSort(arr) {
  let noMoreSwaps;
  for (let i = arr.length; i > 0; i--) {
    noMoreSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noMoreSwaps = false;
      }
    }
    if(noMoreSwaps) break
  }
  return arr
}

let timeA = performance.now();
console.log(bubbleSort([12,3,4,6,1,23,4,5,8,0,9]));
let timeB = performance.now();
console.log(`Time taken: ${(timeB - timeA) / 1000} seconds`)

// Selection Sort -- works opposite to bubble sort. values accumulate at the start of the array
// In this we compare a value until we find a value smaller, then this value becomes the new min and so on.
// At the end we swap the smallest value with that of the index of the value we started with

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    if(i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}

let time1 = performance.now();
console.log(selectionSort([12,3,4,6,1,23,4,5,8,0,9]));
let time2 = performance.now();
console.log(`Time taken: ${(time2 - time1) / 1000} seconds`)

// Both Bubble sort and Selection Sort are not very efficient. Because nested loops make the Big O O(n sqaured).
// In bubble sort we constantly swap. In selection sort we compare mostly but only swap at the end
