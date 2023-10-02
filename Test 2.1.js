dothings = (data) => {
    let input = data.toString().split(" ");
    let b = 0;
    let count = 0;

    for(let i = 0; i < input.length; i++) {
        b = b + parseInt(input[i])
        count += 1
    }

    return b / count;
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});