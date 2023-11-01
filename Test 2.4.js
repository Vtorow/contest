dothings = (data)  => {
    let input = data.toString()
    let rer = []
    for (let i = input.length - 1; i > -1; i--){
        rer.push(parseInt(input[i]))
    }
    return `[${rer.join(', ')}]`;
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});