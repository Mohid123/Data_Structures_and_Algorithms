// The Big O Notation
//Reverse String

function reverseString(str) {
   return str.split('').reverse().join('');
}
console.log(reverseString("HELLO"));

// Function that sums all numbers provided upto n (Performance timing approach)

//First Implemnetation
// The Big O for this is f(n) = n -- linear
function sumAll(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i // Here the operations performed depends upon the value of n.
    } // If n is 5, it will run 5 times. If n is billion it will run a billion times. So there are "n" operations.
    return total
}
let time1 = performance.now();
sumAll(1000000000);
var time2 = performance.now();
console.log(`Time taken: ${(time2 - time1) / 1000} seconds`);

// Second Implementation
// The Big O for this is f(n) = 1 -- constant
function sumMore(n) {
    return n * (n + 1) / 2; // here three operations are performed multiplication, addition and divison. MUCH FASTER
}
let time3 = performance.now();
sumMore(1000000000);
var time4 = performance.now();
console.log(`Time taken: ${(time4 - time3) / 1000} seconds`);



// This function's Big O is f(n) = n*n -- quadratic
function countUpAndDown(n) {
    for(let i = 0; i < n; i++) {
        console.log(i)
    }
    for(let j = n-1; j >= 0; j--) {
        console.log(j)
    }
}
