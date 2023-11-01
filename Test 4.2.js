const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function nextSmallestFloat(n) {
    if (n >= 0) {
        return Math.pow(2, -n);
    } else {
        return -Math.pow(2, -n);
    }
}

rl.question('Введите целое число: ', (input) => {
    const number = parseInt(input);
    const result = nextSmallestFloat(number);
    console.log(`Наименьшее представимое число после ${number} равно ${result}`);
    rl.close();
});