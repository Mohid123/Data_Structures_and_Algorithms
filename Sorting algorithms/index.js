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

// let timeA = performance.now();
// console.log(bubbleSort([12,3,4,6,1,23,4,5,8,0,9]));
// let timeB = performance.now();
// console.log(`Time taken: ${(timeB - timeA) / 1000} seconds`)

// Selection Sort -- works opposite to bubble sort. values accumulate at the start of the array
// In this we compare a value until we find a value smaller, then this value becomes the new min and so on.
// At the end we swap the smallest value with that of the index of the value we started with

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    if(i !== min) [arr[i], arr[min]] = [arr[min], arr[i]]
  }
  return arr
}

// let time1 = performance.now();
// console.log(selectionSort([12,3,4,6,1,23,4,5,8,0,9]));
// let time2 = performance.now();
// console.log(`Time taken: ${(time2 - time1) / 1000} seconds`)

// Both Bubble sort and Selection Sort are not very efficient. Because nested loops make the Big O O(n sqaured).
// In bubble sort we constantly swap. In selection sort we compare mostly but only swap at the end

// Insertion Sort
// Sorts by bulding a larger left half as the array progresses. Good for where data is continuosly being added to array.

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

// console.log(insertionSort([2,1,9,7,3,12]))


/**INTERMEDIATE SORTING ALGOS */

// Merge Sort -- Divide the array into one item subarrys, sort and merge

// First Merge arrays that are sorted. Merge Arrays
function mergeArray(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
      merged.push(arr1[i])
      i++
    }
    else {
      merged.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++
  }
  return merged
}

// console.log(mergeArray([1,2,4,6], [3,5,7,8]));

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let middle = Math.floor(arr.length/2)
  let half1 = mergeSort(arr.slice(0, middle))
  let half2 = mergeSort(arr.slice(middle))
  return mergeArray(half1, half2)
}

// let time1 = performance.now();
// console.log(mergeSort([1,2,4,6,3,5,7,8]))
// let time2 = performance.now();
// console.log(`Time taken: ${(time2 - time1) / 1000} seconds`);

// Quick Sort
// Also solved recursively like Merge Sort
// We select a single elem, a pivot if you will and move the values around it

//swap function
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// Pivot function

function pivot(arr, start = 0, end = arr.length - 1) {
  var pivot = arr[start]; //start item of the array
  var swapIndex = start; // start index of array
  for (let i = start + 1; i < arr.length; i++) {
    if(pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i)
    }
  }
  swap(arr, start, swapIndex)
  return swapIndex
}

// console.log(pivot([4,8,2,1,5,7,6,3]))

// Quick sort function

function quickSort(arr, left = 0, right = arr.length - 1) {
  if(left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr
}

console.log(quickSort([4,8,2,1,5,7,6,3]))

// Radix Sort
// It is a special kind of sort that works on list of numbers only. Every other sort we've seen so far 
// makes comparisons but this one doesn't.
// We need to write a couple of helper methods that help us implement radix sort

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

console.log(getDigit(7342, 2))
// What we're doing:
// Math.pow(10, place) = 10 powered the provided index, so 100 in our example;
// We divide 7342 by 100;
// We get 73
// Then we take modulus of 73 by 10. We get 3 (10 because we are using base10 numbers)

// Next we need to find the largest number of digits

function digitCount(num) {
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

console.log(digitCount(2345))

function mostDigits(nums) {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, digitCount(nums[i]))
  }
  return maxDigit
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for(let i = 0; i < maxDigitCount; i++) {
    let buckets = Array.from({length: 10}, () => []);
    for (let j = 0; j < nums.length; j++) {
      buckets[(getDigit(nums[j], i))].push(nums[j])
    }
    nums = [].concat(...buckets)
  }
  return nums
}

console.log(radixSort([123, 12, 3455, 23, 1]))