const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomArray = (l, min, max) => {
    let arr = [];
    for (let i = 0; i < l; i++) {
        arr.push(getRandomInt(min, max));
    }
    return arr;
};

const getRandomString = (l) => {
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < l; i++) {
        result += characters.charAt(getRandomInt(0, characters.length - 1));
    }
    return result;
};

export default getRandomInt;
export { getRandomArray, getRandomString };