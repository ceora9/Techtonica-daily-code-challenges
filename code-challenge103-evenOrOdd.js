// Create a function that displays the numbers between 0 and 15 and checks if they’re even or odd.

function evenOrOdd(int) {
    if (Number.isInteger(int)) {
        for (const x of Array(int + 1).keys()) {
            if (x >= 2 && x % 2 === 0) {
                console.log(x + ' is even')
            }
            if (x % 2 !== 0) {
                console.log(x + ' is odd')
            }
        }
    }

    else {
        console.log('Invalid input, please enter a number.')
    }
}

evenOrOdd(15);
