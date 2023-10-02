dothings = (data)  => {
    let input = data.toString()
    let rar = []
    for (let i = input.length - 2; i > -1; i--){
        rar.push(parseInt(input[i]))
    }
    return rar
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});