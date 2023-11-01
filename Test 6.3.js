function sleep(ms)
{
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function awaitSleep(ms)
{
    await sleep(ms);
    console.log('1234');
}

awaitSleep(1000);