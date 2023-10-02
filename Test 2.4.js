dothings = (data)  => {
    let input = data.toString()
    let arr = []
    for (let i = input.length - 2; i > -1; i--){
        arr.push(parseInt(input[i]))
    }
    return arr
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});