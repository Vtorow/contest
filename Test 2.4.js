dothings = (data)  => {
    let input = data.toString()
    let rer = []
    for (let i = input.length - 2; i > -1; i--){
        rer.push(parseInt(input[i]))
    }
    return rer
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});