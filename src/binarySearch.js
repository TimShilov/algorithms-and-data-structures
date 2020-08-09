function binarySearch(sortedArray = [], seekValue, extractionCallback) {
    let lowIndex = 0;
    let highIndex = sortedArray.length - 1;

    while (lowIndex <= highIndex) {
        const middleIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2);

        const guessValue = extractionCallback
            ? extractionCallback(sortedArray[middleIndex])
            : sortedArray[middleIndex];

        if (guessValue === seekValue) {
            return middleIndex;
        }
        if (guessValue > seekValue) {
            highIndex = middleIndex - 1;
        } else {
            lowIndex = middleIndex + 1;
        }
    }
    return -1;
}

module.exports = binarySearch;
