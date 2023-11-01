function binarySearch(y) {
    let left = 0;
    let right = y;
    let epsilon = 0.0000001;

    while (right - left > epsilon) {
        let mid = (left + right) / 2;
        let result = mid;

        if (result > String(Math.ceil(y)).length-1) {
            right = mid;
        } else {
            left = mid;
        }
    }

    return left;
}

var inp1
inp1 = Number(prompt())
console.log(inp1.toExponential());
console.log(binarySearch(inp1));