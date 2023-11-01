function getUtcOffset() {
    var now = new Date();
    return (now.getHours() - now.getUTCHours());
}

console.log(getUtcOffset());