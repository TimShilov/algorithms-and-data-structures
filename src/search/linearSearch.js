function linearSearch(array = [], seekValue, extractionCallback) {
    for (let index = 0; index < array.length; index++) {
        const guessValue = extractionCallback
            ? extractionCallback(array[index])
            : array[index];

        if (guessValue === seekValue) {
            return index;
        }
    }
    return -1;
}

module.exports = linearSearch;
