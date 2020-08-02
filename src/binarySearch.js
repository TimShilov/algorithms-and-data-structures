function binarySearch(array = [], searchValue) {
    let low = 0;
    let high = array.length - 1;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        const guess = array[mid];
        if (guess === searchValue) {
            return mid;
        }
        if (guess > searchValue) {
            high = high - low - 1;
        } else {
            low = high - mid + 1;
        }
    }
    return null;
}

module.exports = binarySearch;
