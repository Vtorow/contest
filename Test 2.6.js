dothings = (data)  => {
    let input = data
    let count = 0
    let arr = []
    for (let i = 2; i<input; i++){
        if (input % i === 0){
            arr.push(i)
            count += 1
        }
    }
    if (count === 0){
        return `${input} целое число"`
    }
    else{
        return `[${arr.join(', ')}]`;

    }
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});