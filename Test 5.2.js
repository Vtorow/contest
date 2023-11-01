function indexOf(arr, value) {
    const mappedArr = arr.map((el, index) => [index, el]);
    const filteredArr = mappedArr.filter(([index, val]) => val === value);
    const indexes = filteredArr.map(([index, val]) => index);

    return indexes;
}

const array = [0, 1, 7, 2, 0, 3, 0];
const value = 0;

const result = indexOf(array, value);
console.log(result);