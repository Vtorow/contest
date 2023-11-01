function invokeAfterDelay(func, delay)
{
    return new Promise((resolve) =>
    {
        setTimeout(() => {resolve(func());}, delay);
    });
}

const randomPromise = invokeAfterDelay(() =>
{
    return Math.random();
}, 1000);

randomPromise.then((result) => {
    console.log(result);
});