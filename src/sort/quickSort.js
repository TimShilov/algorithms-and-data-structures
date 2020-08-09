function quickSort(array = [], extractionCallback) {
    if (array.length < 2) {
        return array;
    }
    const getItemValue = (item) => {
        return extractionCallback ? extractionCallback(item) : item;
    };

    const pivotIndex = Math.floor(Math.random() * array.length);
    const pivot = array[pivotIndex];
    const pivotValue = getItemValue(pivot);

    const lessThanOrEqualToPivot = [];
    const greaterThanPivot = [];

    for (let index = 0; index < array.length; index++) {
        if (index === pivotIndex) {
            continue;
        }
        const item = array[index];
        const itemValue = getItemValue(item);

        if (itemValue <= pivotValue) {
            lessThanOrEqualToPivot.push(item);
        } else {
            greaterThanPivot.push(item);
        }
    }

    return [
        ...quickSort(lessThanOrEqualToPivot, extractionCallback),
        pivot,
        ...quickSort(greaterThanPivot, extractionCallback),
    ];
}

module.exports = quickSort;
