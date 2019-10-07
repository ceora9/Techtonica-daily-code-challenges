function close_far(a, b, c) {
    if (Math.abs(a - b) <= 1 && Math.abs(a - c) >= 2 && Math.abs(b - c) >= 2) {
        return true;
    }

    else if (Math.abs(b - c) <= 1 && Math.abs(a - b) >= 2 && Math.abs(a - c) >= 2) {
        return true;
    }

    else if (Math.abs(a - c) <= 1 && Math.abs(b - a) >= 2 && Math.abs(b - c) >= 2) {
        return true;
    }

    else {
        return false;
    }
}

console.log(close_far(1, 2, 10));
console.log(close_far(1, 2, 3));
console.log(close_far(4, 1, 3));
console.log(close_far(10, 2, 1));
console.log(close_far(2, 10, 1));
console.log(close_far(2, 1, 10));
console.log(close_far(3, 5, 7));
console.log(close_far(3, 5, 12));
