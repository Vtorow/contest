dothings = (data) => {
    let input = data
    if (input % 2 == 0){
        return "Even"
    }
    else{
        return "Odd"
    }
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});