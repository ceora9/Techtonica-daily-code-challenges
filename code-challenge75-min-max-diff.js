// Description:
// Given an array containing one or more integers, return the difference between the smallest and largest values in the array.

//     Constraints:
// The JavaScript Math built -in object's Math.min() and Math.max() methods return the lowest and highest values of a given set of numerical arguments, respectively. For this challenge, do NOT use these built-in functions in your solution, but feel free to write your own implementations if you wish.

// Input: Array of integers
// Expected Output: Integer

// Examples:
// largestDifference([10, 3, 5, 6]) // 7
// largestDifference([7, 2, 10, 9]) // 8
// largestDifference([2, 10, 7, 2]) // 8

function largestDifference(integerArray) {
    let largest = integerArray.slice(0, 1);
    let smallest = integerArray.slice(0, 1);

    for (i = 0; i < integerArray.length; i++) {
        if (largest < integerArray[i]) {
            largest = integerArray[i];
        }

        if (smallest > integerArray[i]) {
            smallest = integerArray[i];
        }
    }
    return largest - smallest;
}

largestDifference([10, 3, 5, 6]);
// largestDifference([7, 2, 10, 9]);
// largestDifference([2, 10, 7, 2]);

