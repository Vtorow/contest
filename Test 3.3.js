class Random
{
    constructor()
    {

    }

    nextDouble(high,low)
    {
        return Math.random() * (high - low) + low;
    }

    nextInt(high,low)
    {
        return Math.floor(Math.random() * (high - low + 1)) + low;
    }

    nextElement(array)
    {
        return array[Math.floor(Math.random() * array.length)];
    }
}

RD = new Random()

var R1 = RD.nextDouble(1, 10);
var R2 = RD.nextInt(1, 10);
var R3 = RD.nextElement([1, 2.71, "Moloko", 9, 3.14, -9999]);

console.log(R1, R2, R3);