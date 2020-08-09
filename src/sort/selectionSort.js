function selectionSort(array = [], extractionCallback) {
    const arrayCopy = [...array];
    const result = [];
    while (arrayCopy.length > 0) {
        const smallestIndex = findSmallestIndex(arrayCopy, extractionCallback);
        result.push(...arrayCopy.splice(smallestIndex, 1));
    }

    return result;
}

function findSmallestIndex(array, extractionCallback) {
    let smallestIndex = 0;
    const getValue = (row) => {
        return extractionCallback ? extractionCallback(row) : row;
    };
    for (let index = 0; index < array.length; ++index) {
        if (getValue(array[index]) < getValue(array[smallestIndex])) {
            smallestIndex = index;
        }
    }
    return smallestIndex;
}

module.exports = selectionSort;
