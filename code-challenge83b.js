// Description: Write a function that returns all odd numbers from 1 to a specified limit (inclusive) in order within a single string separated by spaces. Return an empty string if the supplied argument is less than 1.

// Input: integer
// Output: string

// Examples:
// oddNumbers(10) // "1 3 5 7 9"
// oddNumbers(11) // "1 3 5 7 9 11"

function oddNumbers(limit) {
    let odds = "";
    for (i = 1; i <= limit; i += 2) {
        odds += " " + i;
    }
    return odds.trim();
}

oddNumbers(10);
oddNumbers(11);
