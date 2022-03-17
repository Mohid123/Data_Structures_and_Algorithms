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

// The Big O of objects
let instructor = {
    firstName: "kelly",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4] // objects work well when we don't need order or when we need fast access or insertion/removal
}

console.log(Object.entries(instructor));
console.log(Object.keys(instructor))
console.log(Object.values(instructor))
console.log(instructor.hasOwnProperty("firstName"))

// Big O of Objects is:
// Insertion: O(1)
// Removal: O(1)
// Searching O(n)
// Access O(1)

// Big O of some Object Methods
// Object.keys() O(n)
// Object.values() O(n)
// Object.entries() O(n)
// Object.hasOwnProperty() O(1)

// So Objects are very fast and basic but there is no order.

// ARRAYS in Big O
 let names = ["Mohid", "Junaid", "Sudais"];
 let values = [true, {}, "string", [], 2];
// Arrays are intrinsically ordered. This is great but can affect some methods' performance

// Big O of arrays is:

// Access O(1)

// Insertion/Removal It depends on where we perform these operations. If we add an item to the end it's quite fast O(1), but say we add it to the start or somewhere in between,
//  the indexes get messed up and have to be rearranged and reassigned because remember arrays have ORDER. The amount of time will grow with the size of array. Similar for
// when we remove an item.

// Searching O(n)

// Methods of arrays
// push O(1)
// pop O(1)
// shift O(n)
// unshift O(n)
// concat O(n)
// slice O(n)
// splice O(n)
// sort O(n * log n)
// forEach/map/filter/reduce O(n)

// push and pop methods are always faster than shift and unshift.
