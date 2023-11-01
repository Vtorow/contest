function indexOf(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++)
    {
        if (func(arr[i])) {result.push(i);}
    }
    return result;
}

const arr = [1, 2, 3, 4, 5];
const positiveIndices = indexOf(arr, x => x%2 == 0);
console.log(positiveIndices);