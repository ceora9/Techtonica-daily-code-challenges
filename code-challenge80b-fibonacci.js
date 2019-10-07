// Instructions: Write a recursive function that returns the nth number in the Fibonacci sequence.

function fibonacciNumberRecursive(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacciNumberRecursive(n - 1) + fibonacciNumberRecursive(n - 2);
    }
}

fibonacciNumberRecursive(3);
fibonacciNumberRecursive(8);
