dothings = (data)  => {
    let input = data.toString().split(" ")
    let a = parseInt(input[0])
    let b = parseInt(input[1])
    let c = parseInt(input[2])
    if ((a+b > c) & (a+c > b) & (b+c > a)){
        return "true"
    }
    else{
        return "false"
    }
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});