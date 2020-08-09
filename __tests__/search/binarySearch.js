const binarySearch = require("../../src/search/binarySearch");

describe("Binary Search", () => {
    it("should find index in sorted array of numbers or return -1", () => {
        expect(binarySearch([], 1)).toBe(-1);
        expect(binarySearch([1], 1)).toBe(0);
        expect(binarySearch([1, 2], 1)).toBe(0);
        expect(binarySearch([1, 2, 3], 2)).toBe(1);
        expect(binarySearch([1, 5, 10, 12], 1)).toBe(0);
        expect(binarySearch([1, 5, 10, 12, 14, 17, 22], 17)).toBe(5);
        expect(binarySearch([1, 5, 10, 12, 14, 17, 100], 1)).toBe(0);
        expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(7);
        expect(binarySearch([1, 5, 10, 12, 14, 17, 22, 100], 0)).toBe(-1);
    });

    it("should find index in sorted array of objects or return -1", () => {
        const sortedArrayOfObjects = [
            { key: 1, value: "value1" },
            { key: 2, value: "value2" },
            { key: 3, value: "value3" },
        ];

        const extractor = (row) => row.key;

        expect(binarySearch([], 1, extractor)).toBe(-1);
        expect(binarySearch(sortedArrayOfObjects, 4, extractor)).toBe(-1);
        expect(binarySearch(sortedArrayOfObjects, 1, extractor)).toBe(0);
        expect(binarySearch(sortedArrayOfObjects, 2, extractor)).toBe(1);
        expect(binarySearch(sortedArrayOfObjects, 3, extractor)).toBe(2);
    });

    it("should find item in sorted array of arrays or return -1", () => {
        const sortedArrayOfArrays = [
            [1, "value1"],
            [2, "value2"],
            [3, "value3"],
        ];

        const extractor = (row) => row[0];

        expect(binarySearch([], 1, extractor)).toBe(-1);
        expect(binarySearch(sortedArrayOfArrays, 4, extractor)).toBe(-1);
        expect(binarySearch(sortedArrayOfArrays, 1, extractor)).toBe(0);
        expect(binarySearch(sortedArrayOfArrays, 2, extractor)).toBe(1);
        expect(binarySearch(sortedArrayOfArrays, 3, extractor)).toBe(2);
    });
});
