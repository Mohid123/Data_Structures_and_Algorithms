// Recursive Functions
// There are two main parts of recursive functions. One is the base case, which is the end of the line of the function, the part where
// the function is supposed to terminate
// The second is the recursive call with a different input
function countDown(num) {
  if(num <= 0) {
    console.log("All Done");
    return
  }
  console.log(num)
  num--;
  countDown(num)
}

// countDown(5)

function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num - 1)
}

// console.log(sumRange(4))
// How does sumRange work?
// return 4 + sumRange(3)
//            3 + sumRange(2)
//                2 + sumRange(1)
//                    1

// Using iteration to find factorial of 10;
function iterationNumber(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i
  }
  return total
}
// console.log(iterationNumber(10))

// Now the same question but done recursively

function factorial(num) {
  if(num === 1) return 1;
  return num * factorial(num-1);
}

// console.log(factorial(3))

// Recursion Pitfalls
// No base case (in case there is none)
// Forgetting to return or returning nothing
// Stack Overflow!!


// Helper Method Recursion

function collectOddNumbers(num) {
  let result = [];
  function helperArray(input) {
    if(input.length === 0) {
      return;
    }
    if(input[0] % 2 !== 0) {
      result.push(input[0])
    }
    helperArray(input.slice(1))
  }
  helperArray(num);
  return result
}

// console.log(collectOddNumbers([1,2,3,4,5,6,7,8,9,10]));

// Pure Recursion
// Solve the above problem using pure recursion

function collectOddPurely(nums) {
  let newArr = [];
  if(nums.length === 0) {
    return newArr;
  }
  if(nums[0] % 2 !== 0) {
    newArr.push(nums[0]);
  }

  newArr = newArr.concat(collectOddPurely(nums.slice(1)));
  return newArr
}

// console.log(collectOddPurely([1,2,3,4,5,6,7,8,9,10]))

function pow(base, exp) {
  if(exp === 0) return 1
  return base * pow(base, exp - 1)
}

// console.log(pow(2, 2))

function factorial(n) {
  if(n < 0) return 0
  if(n <= 1) return 1
  return n * factorial(n-1)
}

// console.log(factorial(3))

function productOfArrays(arr) {
  if(arr.length === 0) return 1
  return arr[0] * productOfArrays(arr.slice(1))
}

// console.log(productOfArrays([1,2,3,4,5]))

function recursiveRange(num) {
  if(num === 0) return 0;
  return num + recursiveRange(num - 1);
}
// console.log(recursiveRange(10))

function fib(n){
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(5))

// Advanced Recursion Problems
function reverseString(str) {
  if(str.length <= 1) return str;
  return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString('awesome'))

function isPalindrome(str) {
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false
}

console.log(isPalindrome('civic'))

function someRecursive(arr, callback) {
  if(arr.length === 0) return false;
  if(callback(arr[0])) return true
  return someRecursive(arr.slice(1), callback)
}

function flattenArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      newArr = newArr.concat(flattenArray(arr[i]))
    }
    else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(flattenArray([1,2,[2,3],4,5]))
