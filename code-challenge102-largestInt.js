// Create a function that takes two integers and displays the largest one. 
// Example:
// largestInt(11, 22) → 22 
// largestInt(22, 44) → 44

function largestInt(int1, int2) {

    if (int1 > int2) {
        return int1;
    }

    else {
        return int2;
    }
}

console.log(largestInt(11, 22));
console.log(largestInt(22, 44));

//SOLUTION USING MATH OBJECT METHOD:

// function largestInt(int1, int2) {
//     return Math.max(int1, int2);
// }
