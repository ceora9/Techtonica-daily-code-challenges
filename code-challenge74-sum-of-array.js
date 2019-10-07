// Instructions:
// Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and the number that comes immediately after a 13 also does not count.

// sum13([1, 2, 2, 1]) → 6
// sum13([1, 1]) → 2
// sum13([1, 2, 2, 1, 13]) → 6
// sum13([13, 2, 2, 1, 13]) → 3

function sum13(int_array) {

    let newArray = 0;
    for (i = 0; i < int_array.length; i++) {
        if (int_array[i] === 13) {
            int_array.splice(0, 1);
        }
        else {
            newArray += int_array[i];
        }
    }
    return newArray;
}

console.log(sum13([1, 2, 2, 1]));
console.log(sum13([1, 1]));
console.log(sum13([1, 2, 2, 1, 13]));
console.log(sum13([13, 2, 2, 1, 13]));
console.log(sum13([]));









