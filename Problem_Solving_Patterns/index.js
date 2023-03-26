// Problem solving patterns
// We are given two arrays and we have to check if the values in arr1 correspond to their square values in arr2.
// But the frequency of the values must be only once, meaning for each value in arr1 there must be a square of it in arr2 but only once


// O(n squared) not good
const sameArr = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    let squaredIndex = arr2.indexOf(Math.pow(arr1[i], 2));
    if (squaredIndex === -1) {
      return false
    }
    arr2.splice(squaredIndex, 1);
  }
  return true;
}

// console.log(reverseArr([1,2,3,4]))

// reverse array without reverse
function reverseArr(arr) {
  let reversedArr = []
  while (arr.length) {
    reversedArr.push(arr.pop());
  }
  return reversedArr
}

// console.log(sameArr([2, 3, 4], [4, 9, 16]))

// Frequency counter approach
// O(n) very good

const frequencyCounter = (arr1, arr2) => {
  if(arr1.length !== arr2.length) {
    return false
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // {1: 1, 2: 2, 3: 1, 4: 1}
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

// console.log(frequencyCounter([1,2,3,4,2, 5], [1,4,9,4,16, 11]))

//anagram frequency

function validAnagram(str1, str2){
  if(str1.length !== str2.length) {
    return false
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of str1.split('')) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2.split('')) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  if(Object.values(frequencyCounter1).length !==  Object.values(frequencyCounter2).length) {
    return false
  }
  return true
}

// console.log('Anagram Count', validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))

// Alternate way to check anagram
const findAnagram = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false
  }
  let lookup = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] = lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if(!lookup[letter]) {
      return false
    }
    else {
      lookup[letter] -= 1;
    }
  }
  return true
}

// console.log(findAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'))

// POINTER PATTERN

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  for (let i = 0; i < arr.length; i++) { // can also be done with while loop
    if(left < right) {
      let sum = arr[left] + arr[right];
      if(sum == 0) {
        return [arr[left], arr[right]]
      }
      else if(sum > 0) {
        right--
      }
      else {
        left++
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2]));

// Count unique values

const countUniqueValues = (arr) => {
  if(arr.length == 0) {
    return 0
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1,1,2,3,4,4,5]))
// console.log(countUniqueValues([1,1,1,2,2,2,2]))
// console.log(countUniqueValues([]))
// countUniqueValues([1,1,2,3,4,4,5])


// SLIDING WINDOW PATTERN
// find sum of consecutive values in an array based on provided value

const slidingWindow = (arr, num) => { // num here is the number of consecutive digits to add
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length == 0) return null
  for(let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum;
  for (let i = num;  i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}

console.log(slidingWindow([1,3,4,6,7,3,4,2,1], 3))

// Divide and Conquer Approach
// Binary search uses this kind of approach. It can make the code a bit more complicated but it's much much faster

// Find the number specified in the array of sorted integers

const findValue = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;
  while(min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElem = arr[middle];
    if(currentElem < val) {
      min = middle + 1;
    }
    else if(currentElem > val) {
      max = middle - 1;
    }
    else {
      return middle
    }
  }
  return -1
}

console.log(findValue([2, 4, 5, 6, 8, 12, 45, 46, 78, 98, 112], 2))

function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let i = 0;
  let j = 1;
  while(j < args.length) {
    if(args[i] === args[j]) {
      return true
    }
    i++;
    j++
  }
  return false
}

function areThereDuplicatesAlternate(...args) {
  return new Set(args).size !== args.length
}

console.log(areThereDuplicates(1, 'd', 2, 3, 'b', 4, 'a'))
console.log(areThereDuplicatesAlternate(1, 'd', 2, 3, 'b', 4, 'a'))