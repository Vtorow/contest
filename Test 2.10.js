dothings = (data)  => {
    let input = data.toString().split(" ")
    let arr = []
    for (let i = 0; i < input.length; i++){
        let count = 0
        for (let j = i+1; j < input.length; j++){
            if (parseInt(input[i]) > parseInt(input[j])){
                count += 1
            }
        }
        arr.push(count)
    }
    return `[${arr.join(', ')}]`
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});