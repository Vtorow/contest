function getUnicodeCharacters() {
    const unicodeCharacters = [];

    for (let i = 0; i <= 0xFFFF; i++) {
        const character = String.fromCharCode(i);

        const normalizedKC = character.normalize("NFKC");
        const normalizedKD = character.normalize("NFKD");
        if (normalizedKC.length > 1 || normalizedKD.length > 1) {
            unicodeCharacters.push(character);
        }
    }

    return unicodeCharacters;
}

const unicodeCharacters = getUnicodeCharacters();
console.log(unicodeCharacters);