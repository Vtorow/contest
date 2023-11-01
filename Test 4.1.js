const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findExponent(num) {
    if (num === 0) return 0;

    let low = 0;
    let high = 10000;
    let mid, approx;

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2);
        approx = Math.pow(2, mid);

        if (approx === num) {
            return mid;
        } else if (approx < num) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if (Math.pow(2, high) < num) {
        return high;
    } else {
        return low;
    }
}

rl.question('Введите число: ', (num) => {
    const exponent = findExponent(parseFloat(num));
    console.log(`Показатель степени числа ${num} равен ${exponent}`);
    rl.close();
});