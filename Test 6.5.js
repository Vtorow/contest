function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Resolved value');
        }, 1000);
    });
}

async function example() {
    console.log('Start');

    try {
        const result = await asyncFunction();
        console.log(result);
    } catch (error) {
        console.error(error);
    }

    console.log('End');
}

example();