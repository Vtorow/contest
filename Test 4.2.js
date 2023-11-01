function nextmin(x)
{
    return (x).toExponential() + Number.MIN_VALUE;
};

console.log(nextmin(1));
console.log(nextmin(2));
console.log(nextmin(3));
console.log(nextmin(4));

console.log(nextmin(34133.124606));