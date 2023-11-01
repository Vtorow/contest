const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getTimezoneOffsetInHours(userTime) {
    const date = new Date(userTime);
    const offsetInMinutes = date.getTimezoneOffset();
    const offsetInHours = offsetInMinutes / 60;
    return offsetInHours;
}

rl.question('Введите время в формате ГГГГ-ММ-ДДTЧЧ:мм:сс: ', (userTime) => {
    const timezoneOffset = getTimezoneOffsetInHours(userTime);
    console.log(`Разница во времени с UTC: ${timezoneOffset} ч.`);
    rl.close();
});