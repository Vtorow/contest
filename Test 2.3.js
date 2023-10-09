dothings = (data)  => {
    let XX = data.toString()
    let XX_size = XX.length
    if (XX_size === 4){
        if (XX[3] === "0" & XX[2]=== "0"){
            return XX[0]+XX[1]
        }
        else {
            return parseInt(XX[0] + XX[1]) + 1
        }
    }
    else{
        if (XX[1] === "0" & XX[2]=== "0"){
            return XX[0]
        }
        else {
            return parseInt(XX[0]) + 1
        }
    }
};
let cnt, res;
process.stdin.on('data', data => {
    res = dothings(data);
    process.stdout.write(res + '');
    process.exit();
});