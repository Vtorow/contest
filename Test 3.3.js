class Random {
    static nextDouble(low, high) {
        return Math.random() * (high - low) + low;
    }

    static nextInt(low, high) {
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }

    static nextElement(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
}

let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let params = [];
let count = 0;

rl.question('Введите параметр 1: ', function(param1) {
    params.push(parseFloat(param1));
    count++;
    if (count < 5) {
        askNextParameter(count + 1);
    } else {
        const result1 = Random.nextDouble(params[0], params[1]);
        const result2 = Random.nextInt(params[2], params[3]);
        const result3 = Random.nextElement([params[4]]);
        console.log(result1, result2, result3);
        rl.close();
    }
});

function askNextParameter(count) {
    rl.question(`Введите параметр ${count}: `, function(param) {
        params.push(parseFloat(param));
        count++;
        if (count < 5) {
            askNextParameter(count);
        } else {
            const result1 = Random.nextDouble(params[0], params[1]);
            const result2 = Random.nextInt(params[2], params[3]);
            const result3 = Random.nextElement([params[4]]);
            console.log(result1, result2, result3);
            rl.close();
        }
    });
}