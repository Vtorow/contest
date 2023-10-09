dothings = (data)  => {
    let input = parseInt(data)
    let count = 0
    if(input === 1){
        return 4
    }else
    {
        for (let i = 1; i <= input / 2; i++) {
            if (i * i === input) {
                count = i
            }
        }
        if (count === 0) {
            return -1
        } else {
            return (count + 1) ** 2
        }
    }
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});