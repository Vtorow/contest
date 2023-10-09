dothings = (data)  => {
    let input = data
    let count = 0
    for (let i = 0; i<input; i++){
        if (input % i === 0){
            count += 1
        }
    }
    return count+1
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});